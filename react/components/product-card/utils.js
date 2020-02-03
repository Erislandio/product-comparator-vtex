const giveDiscount = (valor, discountValue) => {
  return valor * (1 - discountValue / 100)
}

const getFirstAvailable = selected => {
  const available = selected.items.find(function(a) {
    return a.sellers.find(function(b) {
      return b.commertialOffer.AvailableQuantity > 0
    })
  })

  return available
}

export { giveDiscount, getFirstAvailable }
