import React from 'react'
import { Outlet } from 'react-router-dom'
import styles from './HomePage.module.css'

const HomePage = () => {
  return (
    <div className={styles.homePageStyle}>
        <p>This Is My Home Page</p>
        
        <Outlet/>    
    </div>
  )
}

export default HomePage