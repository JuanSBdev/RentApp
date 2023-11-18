import React from 'react'
import { useSelector } from 'react-redux'

export default function Options() {
  let availability = useSelector(state => state.availability)
  return (<div className="">
    {availability && availability.price &&
    <div>
    <p>Room: {availability.type}</p>
    <p>Max Guests {availability.max_occupancy_per_room}</p>
    <p>desde {availability.dateInit}</p>
    <p>Hasta {availability.dateEnd}</p>
    <p>Total: {availability.price}</p>
    </div>
  }
  </div>
  )
}
