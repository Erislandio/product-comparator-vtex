import React, { useContext } from 'react'
import styles from './styles.css'
import { ProductPlaceholder } from './productPlaceholder'
import { ProductCompareContext } from './context'

export const ProductListPlaceholder = () => {
  const { state } = useContext(ProductCompareContext)

  return (
    <div className={styles.productListPlaceholder}>
      {state &&
        state.map(item => {
          return (
            <div className="relative">
              <ProductPlaceholder
                active={item.active}
                value={item.value}
                id={item.id}
              />
              <ul>
                {item.products
                  ? item.products.map(product => {
                      return <li>{product.productName}</li>
                    })
                  : null}
              </ul>
            </div>
          )
        })}
    </div>
  )
}
