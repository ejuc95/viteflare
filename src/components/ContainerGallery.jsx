import React from 'react'

import styles from '../styles/containerGallery.module.css'

const ContainerGallery = ({ children }) => {
  return (
    <div className={styles.container}>
      {children}
    </div>
  )
}

export default ContainerGallery
