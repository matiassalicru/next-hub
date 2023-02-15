import React from 'react'
import styles from './loading.module.css'

const LoadingPage = () => {
  return (
    <section className={styles.loadingContainer}>
      <div className={styles.dualRing} />
    </section>
  )
}

export default LoadingPage