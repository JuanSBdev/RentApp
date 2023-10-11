import React from 'react'
import Styles from './Start.module.css'
import Nav from '../../components/Nav/Nav'


export default function Start() {
    let imgInit = 'https://cdn.blessthisstuff.com/imagens/stuff/mountain-guest-house-switzerland.jpg'
    
  return (
    
    <div className={Styles.wrapper}>
        <Nav/>
        <div className={Styles.divImg}>

            <img className={Styles.imgInit} src={imgInit}  alt="Cabaña entre montañas" />
        </div>
    </div>
  )
}
