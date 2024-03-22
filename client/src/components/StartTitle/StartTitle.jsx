import React from 'react'
import Styles from './StartTitle.module.css'
import { useSelector } from 'react-redux'
export default function StartTitle() {

  let lang = useSelector(state=> state.language )

  return (
    <div className={`${Styles.wrapper} flex  justify-center md:justify-start w-100  ml-4  mt-10 mb-12 lg:mb-0  `}>
      {lang === 'es' ? (
        <h1 className='flex justify-start text-3xl  text-green-700  font-bold '> Encontrá tu lugar en Córdoba, en Kirá</h1>
      ):(
        <h1 className='flex justify-start text-3xl  text-green-700  font-bold'> Discover your place in Córdoba, at Kirá</h1>

      )  }
    </div>
  )
}
