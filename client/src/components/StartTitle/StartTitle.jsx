import React from 'react'
import Styles from './StartTitle.module.css'
export default function StartTitle() {
  return (
    <div className={`${Styles.wrapper} flex justify-center w-100 mx-2 mt-10`}>
        <h1 className='flex justify-start '> Encontrá tu lugar en Córdoba, en Kirá</h1>
    </div>
  )
}
