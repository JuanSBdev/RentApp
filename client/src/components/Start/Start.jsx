import React from 'react'
import Styles from './Start.module.css'


export default function Start() {
    let imgInit = 'https://cdn.blessthisstuff.com/imagens/stuff/mountain-guest-house-switzerland.jpg'
    
  return (
    
    <div>
        <div className={Styles.nav}>
            <p>Logo</p>
            <input type="text" />
            <p>Contact Us</p>
            <p>About</p>
        </div>
        <div className={Styles.divImg}>

            <img className={Styles.imgInit} src={imgInit}  alt="Cabaña entre montañas" />
        </div>
    </div>
  )
}
