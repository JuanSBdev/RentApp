import React, { useEffect } from 'react'
import Styles from './Start.module.css'
import Nav from '../../components/Nav/Nav'
import FormStart from '../../components/FormStart/FormStart'
import StartTitle from '../../components/StartTitle/StartTitle'
import Places from '../../components/places/Places'
import PlaceView from '../place/PlaceView'
import { useDispatch, useSelector } from 'react-redux'
import NoPlace from '../../components/Inicio/NoPlace'
import { getAllPlaces, postUser } from '../../redux/actions'
import { useAuth0 } from '@auth0/auth0-react'



export default function Start() {
  let dispatch = useDispatch()
  let places = useSelector(state => state.place)
 let {user, isLoading } = useAuth0()

useEffect(()=>{
  dispatch(getAllPlaces())
},[])




    
  return (
    <div className={Styles.wrapper}>
    { places === 'undefined' || places.length < 1 && 

<StartTitle/>
    }
        <div className={Styles.divForm}>
            <FormStart/> 
       </div>
       {
        places.length > 1 ? (
          <div className={Styles.place}>

            <PlaceView/>
          </div>
        ):(
          <div className={Styles.noPlace}>
            <NoPlace/>
          </div>
        )
        }
    </div>
  )
}
