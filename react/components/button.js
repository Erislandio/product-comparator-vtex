import React, { useContext } from 'react'
import { Button } from 'vtex.styleguide'
import styles from './styles.css'
import { ProductCompareContext } from './context'

export const ButtonWrapper = () => {
  const { state, setState, showToast } = useContext(ProductCompareContext)

  const handleClick = () => {
    const verifyProductSelected = state.filter(item => !item.selected)

    if (verifyProductSelected.length) {
      return showToast('Selecione mais produtos!', {
        keepAfterUpdate: '',
      })
    }

    setState([...state.map(item => ({ ...item, show: true }))])
  }

  return (
    <div className={styles.button}>
      <Button onClick={handleClick}>Comparar</Button>
    </div>
  )
}
