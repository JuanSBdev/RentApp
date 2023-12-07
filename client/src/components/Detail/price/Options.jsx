import React from 'react'
import { useSelector } from 'react-redux'
import Style from './Options.module.css'

export default function Options() {
  let availability = useSelector(state => state.availability)
  return (
    <div className={`${Style.container}`}>
    {availability && availability.price &&
      <div className={`${Style.wrapper} bg-[#fcffee]`}> 
        <div className={Style.data}>
          <p>Room: {availability.place.type}</p>
          <p>Max Guests {availability.place.max_occupancy_per_room}</p>
          <p>desde {availability.dateInit}</p>
          <p>Hasta {availability.dateEnd}</p>
          <p>Total: {availability.price}</p>
        </div>
        <button className='flex items-center justify-center h-12 px-6 w-64            bg-[#259073] rounded font-bold text-sm text-blue-100 hover:bg-[#7fda89] my-5'> Reserve </button>
      </div>
    }
    </div>
  )
}
