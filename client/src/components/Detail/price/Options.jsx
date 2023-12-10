import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Style from './Options.module.css'
import { postReserve } from '../../../redux/actions'
import { useAuth0 } from '@auth0/auth0-react'

export default function Options() {
  let dispatch = useDispatch()
  let availability = useSelector(state => state.availability)
  let userRdx = useSelector(state => state.user)
  const { loginWithRedirect, user, isLoading} = useAuth0();

  let makeReserve = ()=>{
    if (userRdx.length <= 0) {
      loginWithRedirect()
    } else {
      
      dispatch(
        postReserve( userRdx.id,availability.place.id, availability.dateInit, availability.dateEnd,   )
      )
    }
  }

  return (
    <div className={`${Style.container} bg-[#fcffee] m-5`}>
      <div className={`${Style.wrapper} `}> 
        <div className={Style.data}>
          <p>Room: {availability.place.type}</p>
          <p>Max Guests {availability.place.max_occupancy_per_room}</p>
          <p>desde {availability.dateInit}</p>
          <p>Hasta {availability.dateEnd}</p>
          <p>Total: {availability.price}</p>
        </div>
        
          <button className='flex items-center justify-center h-12 px-6 w-64            bg-[#259073] rounded font-bold text-sm text-blue-100 hover:bg-[#7fda89] mt-3.5' onClick={()=> makeReserve()}> Reserve </button>
      </div>
    
    </div>
  )
}
