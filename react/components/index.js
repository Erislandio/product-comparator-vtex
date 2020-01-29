import React, { useState, useEffect } from 'react'
import { Wrapper } from './Wrapper'
import { HeaderPage } from './headerPage'
import { ProductCompareContext } from './context'
import { ProductListPlaceholder } from './productPlaceholderList'
import { ButtonWrapper } from './button'

const ProductComparator = () => {
  const [state, setState] = useState([
    {
      id: 1,
      value: '',
      active: true,
      products: [],
      error: false,
      selected: null,
    },
    {
      id: 2,
      value: '',
      active: false,
      products: [],
      error: false,
      selected: null,
    },
    {
      id: 3,
      value: '',
      active: false,
      products: [],
      error: false,
      selected: null,
    },
  ])

  const searchProduct = async value => {
    return await axios.get(`/api/catalog_system/pub/products/search/${value}`)
  }

  useEffect(() => {
    console.log(state)
  }, [state])

  return (
    <ProductCompareContext.Provider
      value={{
        state,
        setState,
      }}
    >
      <Wrapper>
        <HeaderPage />
        <ProductListPlaceholder />
        <ButtonWrapper />
      </Wrapper>
    </ProductCompareContext.Provider>
  )
}

export default ProductComparator
