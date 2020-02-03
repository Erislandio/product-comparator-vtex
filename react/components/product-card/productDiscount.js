import React from 'react'
import { ProductPrice } from 'vtex.store-components'

export const DiscountPrice = ({ discount, discountValue }) => (
  <React.Fragment>
    <div className="teaser flex items-center justify-center tc ">
      ou
      <div className="discount-price ml2 mr2 ">
        <ProductPrice
          sellingPrice={discount}
          listPrice={discount}
          showLabels={false}
          showListPrice={false}
        />
      </div>
      à vista
    </div>
    <span className="discount-flag tc w-100 db">
      (com {discountValue}% de desconto)
    </span>
  </React.Fragment>
)
