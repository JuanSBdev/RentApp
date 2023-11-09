import React, { useEffect } from 'react'
import { getDetail } from '../../redux/actions'
import { useParams } from 'react-router-dom'
import { useDispatch } from 'react-redux'

export default function Detail() {
  let dispatch = useDispatch()
  let {id} = useParams()
  useEffect(()=>{
    dispatch(getDetail(id))
  },[])
  return (
    <div>detalle</div>
  )
}
