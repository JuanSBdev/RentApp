import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Places from '../../components/places/Places'
import Styles from './PlaceView.module.css'
import PlaceFilters from '../../components/Filters/placeFilters'
import { useParams } from 'react-router-dom'

import { getPlaceByDate, getPlaceByGuest, getPlaceByName, getPlacesComplete } from '../../redux/actions';

export default function PlaceView() {
  let { dateFrom, dateTo, guests, city} = useParams()
  let dispatch = useDispatch()
  let submitForm =()=>{
if(city && !dateFrom && !dateTo && !guests){
  dispatch(getPlaceByName(city))
}
else if(city && !dateFrom && !dateTo && guests){
    dispatch(getPlaceByGuest(city, guests))
    console.log(typeof(guests))
}
else if(!city && dateFrom || dateTo && !guests) {  
  dispatch(getPlaceByDate(dateFrom, dateTo))

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
            <div className={` ${Styles.filters}`} >
              <PlaceFilters/>

              </div> 

              <div className="flex md:hidden flex-col content-center items- justify-center">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.6} stroke="white" className="w-8 h-8">
  <path strokeLinecap="round" strokeLinejoin="round" d="M12 3c2.755 0 5.455.232 8.083.678.533.09.917.556.917 1.096v1.044a2.25 2.25 0 0 1-.659 1.591l-5.432 5.432a2.25 2.25 0 0 0-.659 1.591v2.927a2.25 2.25 0 0 1-1.244 2.013L9.75 21v-6.568a2.25 2.25 0 0 0-.659-1.591L3.659 7.409A2.25 2.25 0 0 1 3 5.818V4.774c0-.54.384-1.006.917-1.096A48.32 48.32 0 0 1 12 3Z" />
</svg>
<p className='text-white'> filter</p>

             </div>

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
