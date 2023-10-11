import React from 'react'
import Styles from './Nav.module.css'

export default function Nav() {
  return (
    <div>
        <div className={Styles.nav}>
            <div className={Styles.divNavLogo}>
                <p>Logo</p>
            </div>
            <div className={Styles.divNavInfo}>

            <p>Contact Us</p>
            <p>About</p>
            </div>
        </div>
    </div>
  )
}
