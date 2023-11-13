import React from 'react'
import styles from './DetailCard.module.css'
import { useSelector } from 'react-redux'
import SliderTss from './Slider/SliderTws'
import PlaceData from './Prices/PlaceData';
export default function DetailCard() {
  let place = useSelector(state => state.detail[0])
  return (
    <div className={ `${styles.wrapper}  pt-4 flex items-center flex-col`}>
          <div className=" self-start">
          </div>
            <SliderTss />
            <PlaceData/>
    </div>
  )
}
