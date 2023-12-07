import React from 'react'
import { useSelector } from 'react-redux'
import Style from './Options.module.css'

export default function Options() {
  let availability = useSelector(state => state.availability)
  return (
    <div className={Style.container}>
    {availability && availability.price &&
      <div className={Style.wrapper}>
        <div className={Style.data}>
          <p>Room: {availability.place.type}</p>
          <p>Max Guests {availability.place.max_occupancy_per_room}</p>
          <p>desde {availability.dateInit}</p>
          <p>Hasta {availability.dateEnd}</p>
          <p>Total: {availability.price}</p>
        </div>
        <button className='btn m-4'> Reserve </button>
      </div>
    }
    </div>
  )
}
