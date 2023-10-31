import React from 'react'
import Styles from './StartTitle.module.css'
import { useSelector } from 'react-redux'
export default function StartTitle() {

  let lang = useSelector(state=> state.language )

  return (
    <div className={`${Styles.wrapper} flex justify-center w-100 mx-2 mt-10`}>
      {lang === 'es' ? (
        <h1 className='flex justify-start '> Encontrá tu lugar en Córdoba, en Kirá</h1>
      ):(
        <h1 className='flex justify-start '> Discover your place in Córdoba, at Kirá</h1>

      )  }
    </div>
  )
}
