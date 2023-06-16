import React from 'react'
import styles from './Layout.module.css'

const Layout = () => {
  return (
    <div className={`${styles.mainContainer}`}>
        <div className={`${styles.sideBar}`}>
            <p className={`${styles.textLayout}`}>layout</p>
        </div>
        <div className={`${styles.mainContent}`}>
            <p className={`${styles.textLayout}`}>main content</p>
        </div>
        
    </div>
  )
  }

export default Layout