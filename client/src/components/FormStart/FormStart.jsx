import React from 'react'
import Styles from './FormStart.module.css'

export default function FormStart() {
  return (
    <div className={Styles.wrapper}>
        <h2>Buscar alojamientos</h2>
        <form action="" >
            <input  name='place' type="text" />
            <input  name='date' type="date" />
            <input name='guests'  type="number" />
        </form>
    </div>
  )
}
