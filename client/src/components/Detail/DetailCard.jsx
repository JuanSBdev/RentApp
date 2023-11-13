import React from 'react'
import styles from './DetailCard.module.css'
import { useSelector } from 'react-redux'
import SliderTss from './Slider/SliderTws'
export default function DetailCard() {
  let place = useSelector(state => state.detail[0])
  return (
    <div className=' pt-4 flex items-center flex-col'>
          <div className=" self-start">
              <h2 className='ml-5 py-5 text-white'>{place.name}</h2>
          </div>
            <SliderTss/>
        
    </div>
  )
}
