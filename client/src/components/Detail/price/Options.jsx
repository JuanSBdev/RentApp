import React from 'react'
import { useSelector } from 'react-redux'

export default function Options() {
  let place = useSelector(state => state.detail[0])
  let availability = useSelector(state => state.availability)
  return (<div className="">
    {availability &&
    <div>
    <p>Room: {place.type}</p>
    <p>Max Guests {place.max_occupancy_per_room}</p>
    <p>desde 10/01/2024</p>
    <p>Hasta 14/01/2024</p>
    <p>Total: 300U$D</p>
    </div>
  }
  </div>
  )
}
