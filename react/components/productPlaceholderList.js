import React, { useContext } from 'react'
import styles from './styles.css'
import { ProductPlaceholder } from './productPlaceholder'
import { ProductCompareContext } from './context'
import { ProductList } from './productList'

export const ProductListPlaceholder = () => {
  const { state } = useContext(ProductCompareContext)

  return (
    <div className={styles.productListPlaceholder}>
      {state &&
        state
          .sort((a, b) => a.id - b.id)
          .map(item => {
            return (
              <div className="relative" key={item.id}>
                <ProductPlaceholder
                  selected={item.selected}
                  active={item.active}
                  value={item.value}
                  id={item.id}
                  image={item.image}
                  item={item}
                />
                <ProductList
                  edit={item.edit}
                  item={item}
                  products={item.products}
                  loading={item.loading}
                  id={item.id}
                />
              </div>
            )
          })}
      <div className="product-specifications"></div>
    </div>
  )
}
