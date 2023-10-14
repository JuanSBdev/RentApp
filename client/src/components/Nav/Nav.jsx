import React from 'react'
import Styles from './Nav.module.css'


export default function Nav() {
  return (
    <div className={Styles.wrapperNav}> 
       <div className="navbar ">
  <div className="navbar-start">
    <div className="dropdown">
      <label tabIndex={0} className="btn btn-ghost btn-circle">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h7" /></svg>
      </label>
      <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
        <li><a>Quiero alojar</a></li>
        <li><a>Contact Us</a></li>
        <li><a>About</a></li>
      </ul>
    </div>
  </div>
  <div className=" flex items-end navbar-center">
    <a className=" normal-case text-xl text-[#fff]">Kirá
    </a>
    <p className="text-[black] text-l ml-2" >Alquiler</p>
  </div>
  <div className="navbar-end">
    <div className="dropdown w-10  ">

    <button tabIndex={1} className=' btn btn-ghost btn-circle  '>

        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
        <path strokeLinecap="round" strokeLinejoin="round" d="M17.982 18.725A7.488 7.488 0 0012 15.75a7.488 7.488 0 00-5.982 2.975m11.963 0a9 9 0 10-11.963 0m11.963 0A8.966 8.966 0 0112 21a8.966 8.966 0 01-5.982-2.275M15 9.75a3 3 0 11-6 0 3 3 0 016 0z" />
        </svg>
    </button>
    <ul tabIndex={1} className='menu menu-sm dropdown-content mx-0  z-[1]  shadow bg-base-100 rounded-box w-20 pl-5'>
        <a href="">
              <li className='my-2'>Log In</li>
        </a>
        <a href=""> <li className='my-2'>Sign Up</li></a>
        <a href=""><li className='my-2'>FAQ</li></a>
       
        
    </ul>

    </div>
    
    <button className="btn btn-ghost btn-circle">
      <div className="indicator">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" /></svg>
        <span className="badge badge-xs badge-primary indicator-item"></span>
      </div>
    </button>
  </div>
    <div className="lang">
        <button  className=' btn btn-ghost btn-circle  '>

    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
  <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 21l5.25-11.25L21 21m-9-3h7.5M3 5.621a48.474 48.474 0 016-.371m0 0c1.12 0 2.233.038 3.334.114M9 5.25V3m3.334 2.364C11.176 10.658 7.69 15.08 3 17.502m9.334-12.138c.896.061 1.785.147 2.666.257m-4.589 8.495a18.023 18.023 0 01-3.827-5.802" />
</svg>
        </button>

    </div>
</div>
    </div>
  )
}
