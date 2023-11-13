import React, { useEffect, useState } from 'react'
import { getDetail } from '../../redux/actions'
import { useParams } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import Places from '../../components/places/Places'
import styles from './Detail.module.css'
import SliderTss from '../../components/Detail/Slider/SliderTws'
import DetailCard from '../../components/Detail/DetailCard'

export default function Detail() {
let [loading, setLoading] = useState(true)

  let dispatch = useDispatch()
  let {id} = useParams()
  useEffect(()=>{
    dispatch(getDetail(id))
    setLoading(false)
    console.log(loading)
  },[id])

  let places = useSelector(state => state.detail[0])
  return (
    <div className={`${styles.wrapper} flex  justify-center align-center `} >
              {!loading && places && <h1 className=' ml-5 py-5 text-white'>{places.name}</h1> }

      
      <DetailCard/>

    </div>
  )
}
