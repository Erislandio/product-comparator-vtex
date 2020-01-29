import React from 'react'
import { Button } from 'vtex.styleguide'
import styles from './styles.css'

export const ButtonWrapper = () => {
  return (
    <div className={styles.button}>
      <Button onClick={() => console.log('teste')}>Comparar</Button>
    </div>
  )
}
