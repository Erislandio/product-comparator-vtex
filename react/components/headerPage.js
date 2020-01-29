import React from 'react'
import { FormattedMessage } from 'react-intl'
import styles from './styles.css'

export const HeaderPage = () => {
  return (
    <div className="header-page">
      <h2 className={styles.title}>
        <FormattedMessage id="store.product-comparator.title" />
      </h2>
      <p className={styles.subtitle}>
        <FormattedMessage id="store.product-comparator.subtitle" />
      </p>
    </div>
  )
}
