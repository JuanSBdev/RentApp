import React from 'react'
import { useSelector } from 'react-redux'
import Styles from  './Places.module.css'
import '../../../dist/output.css'; // Ajusta la ruta según la ubicación de tu archivo CSS

export default function Places() {

    let places = useSelector(state=> state.place)
  return (
    places.length > 1 ? (
    places.map(place =>(

        <div className={` ${Styles.wrapper}  wrapper bg-gray-400 antialiased text-gray-900`}>
<div>
    
    <img src="https://source.unsplash.com/random/350x350" alt=" random imgee" className="w-full object-cover object-center rounded-lg shadow-md"/>    
    
 <div className="relative px-4 -mt-16  ">
   <div className="bg-white p-6 rounded-lg shadow-lg">
    <div className="flex items-baseline">
      <span className="bg-teal-200 text-teal-800 text-xs px-2 inline-block rounded-full  uppercase font-semibold tracking-wide">
        New
      </span>
      <div className="ml-2 text-gray-600 uppercase text-xs font-semibold tracking-wider">
    2 baths  &bull; {place.number_of_rooms}
  </div>  
    </div>
    
    <h4 className="mt-1 text-xl font-semibold uppercase leading-tight truncate">{place.name}</h4>
    <span className="text-gray-600 text-sm"> {place.location} </span>
 
  <div className="mt-1">
    <span className="text-gray-600 text-sm"> from </span>
    {place.price_per_night}$
    <span className="text-gray-600 text-sm"> pn</span>
  </div>
  <div className="mt-4">
    <span className="text-teal-600 text-md font-semibold">{place.rating} / 5 </span>
    <span className="text-sm text-gray-600">(based on 234 ratings)</span>
  </div>  
  </div>
 </div>
  
</div>
  </div>
))




    ) : (
        <div className="">
            <h2>Comienza tu busqueda</h2>
        </div>
    )
  )
}
