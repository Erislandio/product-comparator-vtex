import { clone, path } from 'ramda'

const parseImageTag = (imageTag, productImage) => {
  if (productImage) {
    return imageTag
      .split(/"(.*?)"/gi)[1]
      .replace('~/', '/')
      .replace(/#width#/gi, '600')
      .replace(/#height#/gi, '600')
  }

  const width = '70'
  const height = '80'

  const image = imageTag
    .replace(/#width#/gi, width)
    .replace(/#height#/gi, height)
    .replace('~/arquivos', '/arquivos')
  return image
}

const giveDiscount = (valor, discountValue) => {
  return valor * (1 - discountValue / 100)
}

const parseSku = sku => {
  const result = clone(sku)

  const variations = sku.variations.map(variation => {
    result[variation.name] = variation.values[0]
    return variation.name
  })

  result.variations = variations

  return result
}

const getVariationOptions = (variation, skus) => {
  const hTable = {}

  skus.map(sku => {
    const value = sku[variation]
    const quantity =
      path(['commertialOffer', 'AvailableQuantity'], sku.sellers[0]) || 0

    if (!hTable[value]) {
      hTable[value] = sku
    }
  })

  return Object.values(hTable).sort((a, b) => {
    if (a[variation] < b[variation]) return -1
    if (a[variation] > b[variation]) return 1
    return 0
  })
}

const isColor = variation => {
  if (!variation) return false

  return (
    variation.toLowerCase() === 'cor' || variation.toLowerCase() === 'color'
  )
}

export const getMainVariationName = variations => {
  for (let i = 0; i < variations.length; i++) {
    if (isColor(variations[i])) return variations[i]
  }

  return variations[0]
}

const buildVariations = (rawSkuSelected, items) => {
  let skuSelected = rawSkuSelected && parseSku(rawSkuSelected)
  const skuItems = items && items.map(sku => parseSku(sku))
  const itemId = skuSelected.itemId
  const variations = skuSelected.variations
  const name = getMainVariationName(variations)

  let orderItems = []
  skuItems.map(item => {
    getVariationOptions(name, skuItems).map(variationOption => {
      if (variationOption.itemId === item.itemId) {
        orderItems.push(variationOption)
      }
    })
  })

  if (orderItems.length == 1 && orderItems[0].variations.length == 0) {
    orderItems = []
  }

  const mainVariation = {
    name,
    value: rawSkuSelected ? skuSelected[name] : null,
    options: orderItems,
  }

  const secondaryVariation = { value: rawSkuSelected ? itemId : null }
  const filteredSkus = skuItems.filter(sku => sku[name] === skuSelected[name])

  if (variations.length > 1) {
    secondaryVariation.name = variations.find(variation => variation !== name)
    secondaryVariation.options = getVariationOptions(
      secondaryVariation.name,
      filteredSkus
    )
  } else {
    secondaryVariation.options = []
  }

  skuSelected = parseSku(rawSkuSelected)
  return { mainVariation, secondaryVariation, skuSelected }
}

const getImageColor = item => {
  let images = item.images.filter(image => {
    if (image.imageLabel != null && image.imageLabel.length) {
      return image.imageLabel.toLowerCase() === 'color'
    }
  })

  return images.length ? images[0].imageUrl : ''
}

export { parseImageTag, giveDiscount, buildVariations, getImageColor, isColor }
