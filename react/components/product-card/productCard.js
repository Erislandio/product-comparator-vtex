import React from 'react'
import { Link } from 'vtex.render-runtime'
import { path } from 'ramda'
import { ProductPrice } from 'vtex.store-components'
import { giveDiscount, getFirstAvailable } from './utils'
import styles from './product-card.css'
import { Collapsible } from 'vtex.styleguide'
import { ListPriceContent } from './productListPrice'
import { DiscountPrice } from './productDiscount'

export const ProductCard = ({ id, selected, image, handleRemove, show }) => {
  const params = {
    slug: path(['linkText'], selected),
  }

  const available = getFirstAvailable(selected)

  const {
    commertialOffer: { Price, ListPrice, teasers },
  } = available.sellers[0]

  const listPrice = ListPrice != Price ? ListPrice : null
  const savePrice = listPrice != 0 ? listPrice - Price : null

  const discountValue =
    teasers.length && teasers[0].name.search('%')
      ? teasers[0].name.split('%')[0]
      : null

  const discount = giveDiscount(Price, +discountValue)

  return (
    <React.Fragment>
      <Link page="store.product" params={params} className="link">
        <div
          className="product relative w-100 h-100"
          style={{ background: `url(${image})` }}
        >
          <h3>{selected.productName}</h3>
        </div>
      </Link>
      <span className="remove-item">
        <button onClick={handleRemove}>X</button>
      </span>
      <div className={styles.collapsible}>
        <Collapsible isOpen={show} header={<span></span>}>
          <div className={styles.productPriceContent}>
            {listPrice ? (
              <ListPriceContent listPrice={listPrice} savePrice={savePrice} />
            ) : null}
            <div className="price">
              <ProductPrice
                sellingPrice={Price}
                listPrice={Price}
                showLabels={false}
                showListPrice={false}
              />
            </div>
            {discount ? (
              <DiscountPrice
                discountValue={discountValue}
                discount={discount}
              />
            ) : null}
          </div>
          <div className={styles.skuSpecifications}>
            {available.skuSpecifications.map((item, index) => {
              if (id === 1) {
                return (
                  <div
                    key={index}
                    className="justify-center flex w-100 relative"
                  >
                    <span className="b absolute left-0">{item.fieldName}</span>
                    <span>{item.fieldValues[0]}</span>
                  </div>
                )
              }

              return (
                <div key={index} className="justify-center  flex w-100">
                  <span>{item.fieldValues[0]}</span>
                </div>
              )
            })}
          </div>
        </Collapsible>
      </div>
    </React.Fragment>
  )
}
