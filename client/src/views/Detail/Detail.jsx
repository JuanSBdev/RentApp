import React, { useEffect } from 'react'
import { getDetail } from '../../redux/actions'
import { useParams } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import Places from '../../components/places/Places'

export default function Detail() {
  let dispatch = useDispatch()
  let {id} = useParams()
  useEffect(()=>{
    dispatch(getDetail(id))
  },[id])

  let places = useSelector(state => state.detail)
  return (
    <div >
    { places.map((place, index) => (
            <Places key={index}
            id={place.id}
            max_occupancy_per_room={place.max_occupancy_per_room}
            type={place.type}
            name={place.name}
            location={place.location}
            price_per_night={place.price_per_night}
            rating={place.rating}
            
            />
        ))}

    </div>
  )
}
