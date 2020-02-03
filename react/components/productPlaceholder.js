import React, { useContext } from 'react'
import { Input } from 'vtex.styleguide'
import styles from './styles.css'
import { ProductCompareContext } from './context'
import { ProductCard } from './product-card/productCard'
import SEARCH_PRODUCT from '../graphql/query/productSearch.gql'

export const ProductPlaceholder = ({ item, image, selected, id, active }) => {
  const { state, setState, query } = useContext(ProductCompareContext)

  const searchProduct = async value => {
    return await query({
      query: SEARCH_PRODUCT,
      variables: {
        query: value,
      },
    })
  }

  const handleChange = async e => {
    const newArray = state.filter(item => item.id !== id)
    const value = e.target.value

    const {
      data: {
        productSearch: { products },
      },
    } = await searchProduct(value)

    const filterId = state
      .filter(item => item.selected)
      .reduce(
        (accumulator, currentValue) =>
          accumulator.concat(currentValue.selected.productId),
        []
      )

    const productsFilter = products.filter(el => {
      return filterId.every(f => {
        return f !== el.productId
      })
    })

    setState([
      {
        ...item,
        id,
        value,
        active: true,
        products: value ? productsFilter : [],
        selected: null,
        loading: productsFilter.length === 0 ? true : false,
      },
      ...newArray,
    ])
  }

  const handleRemove = () => {
    setState([
      {
        id,
        value: '',
        products: [],
        selected: '',
        active: true,
        loading: false,
        edit: true,
      },
      ...state
        .filter(value => value.id !== id)
        .map(item => {
          return { ...item, active: false, products: [] }
        }),
    ])
  }

  return (
    <div
      className={`${styles.productPlaceholder} ${active ? ' active ' : ' '}`}
    >
      {image ? (
        <ProductCard
          id={id}
          selected={selected}
          image={image}
          handleRemove={handleRemove}
          show={item.show}
          state={state}
        />
      ) : (
        <img
          src="https://samsungbr.vteximg.com.br/arquivos/phone-placeholder.png"
          alt="Product placeholder"
        />
      )}
      <div className="product-placeholder">
        {active ? (
          <div className="ph2 flex items-center space-between input-container">
            <Input
              autoFocus
              name="search"
              placeholder="Pesquise pelo aparelho"
              onChange={e => handleChange(e)}
            />
          </div>
        ) : null}
      </div>
    </div>
  )
}
