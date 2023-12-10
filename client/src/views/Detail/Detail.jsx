import React, { useEffect, useState } from 'react'
import { getDetail } from '../../redux/actions'
import { useParams } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import Places from '../../components/places/Places'
import styles from './Detail.module.css'
import SliderTss from '../../components/Detail/Slider/SliderTws'
import DetailCard from '../../components/Detail/DetailCard'
import FormA from '../../components/Detail/price/Form'
import Options from '../../components/Detail/price/Options'

export default function Detail() {


  let dispatch = useDispatch()
  let {id} = useParams()
  useEffect(()=>{
    dispatch(getDetail(id))
  },[id])

  let availability = useSelector(state => state.availability)
  let places = useSelector(state => state.detail[0])
  return (
    <div className={`${styles.wrapper} flex flex-col align-center `} >
      <DetailCard/>
        {!availability.price && availability ? (
          <div className="">
              <FormA/>

            </div>
          ):(
            <div className="prices flex items-center justify-center w-100 	 ">
              <Options/>
            </div>
          )
        }
      

    </div>
  )
}
