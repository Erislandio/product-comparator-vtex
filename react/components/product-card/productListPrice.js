import React from 'react'
import { ProductPrice } from 'vtex.store-components'

const ListPriceContent = ({ listPrice, savePrice }) => {
  return (
    <div className="flex items-center">
      <span className="product--ListPrice strike f6 mr3 black-60 dib">
        <ProductPrice
          sellingPrice={listPrice}
          listPrice={listPrice}
          showLabels={false}
          showListPrice={false}
        />
      </span>
      <span className="product--SavePrice light-blue f6 dib">
        {/* <FormattedMessage id="store/product.card.save.title" />{' '} */}
        <div className="dib">
          <ProductPrice
            sellingPrice={savePrice}
            listPrice={savePrice}
            showLabels={false}
            showListPrice={false}
          />
        </div>
      </span>
    </div>
  )
}

export { ListPriceContent }
