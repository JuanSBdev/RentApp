import React from 'react'
import AboutText from '../../components/About/AboutText'
import { useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom'




export default function About() {
  let lang = useSelector(state => state.language)

  
  return (
    <div className="Wrapper">
   
      <AboutText/>
    
  </div>
)
}
