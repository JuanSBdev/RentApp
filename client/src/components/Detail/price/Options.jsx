import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Style from './Options.module.css'
import { postReserve } from '../../../redux/actions'
import { useAuth0 } from '@auth0/auth0-react'
import { NavLink } from 'react-router-dom'

export default function Options() {
  const { loginWithRedirect, user, isLoading} = useAuth0();
  let dispatch = useDispatch()
  let availability = useSelector(state => state.availability)
  let userRdx = useSelector(state => state.user)
  let lang = useSelector(state => state.language)
  let [btnReserveTxt, setBtnReserveTxt] = useState('Mis reservas')
  let [btnMakeReserveTxt, setBtnMakeReserveTxt] = useState('Reservar')
  useEffect( ()=>{
    if(lang === 'en'){
      setBtnReserveTxt( 'My reserves')
      setBtnMakeReserveTxt( 'Reserve')
    }
    else {
      setBtnReserveTxt( 'Mis Reservas')
      setBtnMakeReserveTxt( 'Reservar')

    }
  },[lang])
  
  let [reserved, setReserved] = useState(false)
  let makeReserve = ()=>{
    if (userRdx.length <= 0) {
      alert('Login First')
      loginWithRedirect()
    } else {
      setReserved(true)
      dispatch(
        postReserve( userRdx.id,availability.place.id, availability.dateInit, availability.dateEnd,   )
      )
    }
  }



  return (
    <div className={`${Style.container} bg-[#fcffee] m-5`}>
      <div className={`${Style.wrapper} `}> 
       { lang === 'es' ? (<div className={Style.data}>
          <p>Habitacion {availability.place.type}</p>
          <p>Para {availability.place.max_occupancy_per_room}</p>
          <p>desde {availability.dateInit}</p>
          <p>Hasta {availability.dateEnd}</p>
          <p>Precio {availability.price}U$D</p>
        </div>):
       ( <div className={Style.data}>
          <p>Room {availability.place.type}</p>
          <p>Max Guests {availability.place.max_occupancy_per_room}</p>
          <p>From {availability.dateInit}</p>
          <p>To {availability.dateEnd}</p>
          <p>Price {availability.price}U$D</p>
        </div>)}
        { !reserved ? (
          <button className='flex items-center justify-center h-12 px-6 w-64            bg-[#259073] rounded font-bold text-sm text-white hover:bg-[#7fda89] mt-3.5' onClick={()=> makeReserve()}> {btnMakeReserveTxt} </button>
          ):(
            <NavLink className='flex items-center justify-center h-12 px-6 w-64            bg-[#16A085] rounded font-bold text-sm text-white hover:bg-[#2E86C1] mt-3.5'
            to={'/reserves'}> {btnReserveTxt} </NavLink>
        )

        }
      </div>
    
    </div>
  )
}
