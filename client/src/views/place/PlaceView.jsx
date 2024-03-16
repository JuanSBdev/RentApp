import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Places from '../../components/places/Places'
import Styles from './PlaceView.module.css'
import PlaceFilters from '../../components/Filters/placeFilters'
import { useParams } from 'react-router-dom'

import { getPlaceByDate, getPlaceByGuest, getPlaceByName, getPlacesComplete } from '../../redux/actions';

export default function PlaceView() {
  let {dateFrom, dateTo, guests, city} = useParams()
  let dispatch = useDispatch()
  let submitForm =()=>{
if(city && !dateFrom && !dateTo && !guests){
  dispatch(getPlaceByName(city))
}
else if(!city && dateFrom || dateTo && !guests) {  
  dispatch(getPlaceByDate(dateFrom, dateTo))

}
else if(city && !dateFrom && !dateTo && guests){
    dispatch(getPlaceByGuest(guests))
}
else  {
  dispatch( getPlacesComplete(city, dateFrom, dateTo, guests))
}

// window.scrollBy(0, 500);

}
    useEffect(()=>{
      console.log(city)
      submitForm()
    
    },[])

    let places = useSelector(state=> state.place)
      return (
          
        <div className={Styles.wrapper}>
            <PlaceFilters/>
          <div className={Styles.placesWrap}>
          {
            places.map((place, index) => (
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
            </div>
  )
}
