import React, { useState, useEffect } from 'react'
import { Wrapper } from './Wrapper'
import { HeaderPage } from './headerPage'
import { ProductCompareContext } from './context'
import { ProductListPlaceholder } from './productPlaceholderList'
import { ButtonWrapper } from './button'
import { ToastProvider, withToast } from 'vtex.styleguide'
import { withApollo, compose } from 'react-apollo'

const ProductComparator = ({ showToast, client }) => {
  const [state, setState] = useState([
    {
      id: 1,
      value: '',
      active: true,
      products: [],
      selected: null,
      loading: false,
      image: null,
      edit: false,
      skuActive: null,
      show: false,
    },
    {
      id: 2,
      value: '',
      active: false,
      products: [],
      selected: null,
      loading: false,
      image: null,
      edit: false,
      skuActive: null,
      show: false,
    },
    {
      id: 3,
      value: '',
      active: false,
      products: [],
      selected: null,
      loading: false,
      image: null,
      edit: false,
      skuActive: null,
      show: false,
    },
  ])

  useEffect(() => {
    console.log(state)
  }, [state])

  return (
    <ProductCompareContext.Provider
      value={{
        state,
        setState,
        showToast,
        query: client.query,
      }}
    >
      <ToastProvider positioning="window">
        <Wrapper>
          <HeaderPage />
          <ProductListPlaceholder />
          <ButtonWrapper />
        </Wrapper>
      </ToastProvider>
    </ProductCompareContext.Provider>
  )
}

export default compose(
  withToast,
  withApollo
)(ProductComparator)
