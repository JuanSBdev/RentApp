import React from 'react'
import styles from './DetailCard.module.css'
import { useSelector } from 'react-redux'
import SliderTss from './Slider/SliderTws'
import PlaceData from './InfoCard/PlaceData';
export default function DetailCard() {
  let place = useSelector(state => state.detail[0])
  return (
    <div className={ `${styles.wrapper}  pt-4 flex items-center flex-col`}>
          <div className=" self-start">
          { place && <h1 className=' ml-5 py-5 text-white'>{place.location}</h1> }

          </div>
            <SliderTss />
            <PlaceData/>
            

    </div>
  )
}
