import React from 'react'
import Styles from './PlaceFilters.module.css'

export default function placeFilters() {
  return (
    <div className={`${Styles.wrapper}  invisible md:visible`}>
        <div className={`${Styles.order}  shadow-sm shadow-white color-red rounded bg-gray-500 ml-4 p-4 align-center `} >
            <p>Order By</p>
            <p>Higher Price</p>
            <p>Lower Price</p>
        </div>
    </div>
  )
}
