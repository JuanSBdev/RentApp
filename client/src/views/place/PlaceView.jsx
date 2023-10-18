import React from 'react'
import { useSelector } from 'react-redux'
import Places from '../../components/places/Places'
import Styles from './PlaceView.module.css'

export default function PlaceView() {
    let places = useSelector(state=> state.place)
      return (
        places.map((place, index) => (
            <Places key={index}
            max_occupancy_per_room={place.max_occupancy_per_room}
            type={place.type}
            name={place.name}
            location={place.location}
            price_per_night={place.price_per_night}
            rating={place.rating}

            />
        ))
  )
}
