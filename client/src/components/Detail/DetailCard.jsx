import React from 'react'
import styles from './DetailCard.module.css'
import SliderTss from './Slider/SliderTws'
export default function DetailCard() {
  return (
    <div className=' pt-4'>
          <h2>Tu alojamiento</h2>
          <div className="flex justify-center">

            <SliderTss/>
          </div>
        
    </div>
  )
}
