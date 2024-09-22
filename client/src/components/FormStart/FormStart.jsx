import React, {useState} from 'react'
import Styles from './FormStart.module.css'
import '../../../dist/output.css'; // Ajusta la ruta según la ubicación de tu archivo CSS
import { useDispatch, useSelector } from 'react-redux';

import { validateDispatch } from './validateDispatch';
import { Link } from 'react-router-dom';


export default function FormStart() {
  let dispatch = useDispatch()

  let lang = useSelector(state=> state.language)

  const [inputType, setInputType] = useState('text');
  
  let [form, setForm] = useState({
    city: "capilla",
    guests:"",
    dateFrom: "",
    dateTo: ""
  })

let handleForm = (e)=>{
  e.preventDefault()
  
  let {value, name} = e.target;
  setForm((prevValues)=>({
    ...prevValues,
    [name]: value
  }))
}

let handleDate = ()=>{
  e.preventDefault()
  
  let {value, name} = e.target;
  setForm((prevValues)=>({
    ...prevValues,
    [name]: value
  }))
}

return (
          
<div className= { `${Styles.wrapper} flex flex-col items-center justify-center w-screen h-screen` }  >

   {lang === 'es' ? (

     <form  className="  flex flex-col items-center bg-white rounded shadow-lg p-4  lg:flex-row " action="">

           <div className='' >

             <label className="font-semibold text-xs" htmlFor="usernameField">Ciudad</label>
             <select onChange={handleForm} name='city' id="ciudades" className="flex items-center h-12 px-4 w-96 w-md  bg-gray-200 mt-2 rounded focus:outline-none focus:ring-2">
                  <option value="capilla">Capilla del Monte</option>
                   <option value="marcos">San Marcos Sierras</option>
                   <option value="marcos">La Falda</option>
             </select>
             
           </div>
           <div className="m-1">

             <label className="font-semibold text-xs mt-3 m-0 lg:ml-5" htmlFor="passwordField ">Desde</           label>
             <input onChange={handleForm} name='dateFrom' type="date" id="dateInput" className="flex items-center h-12 px-4 w-34 bg-gray-200 ml-0 mt-2              rounded focus:outline-none focus:ring-2 lg:ml-5"/>

           </div>
           <div className="m-1">

             <label className="font-semibold text-xs mt-3 m-0 lg:ml-5"  htmlFor="passwordField">Hasta</           label>
             <input onChange={handleForm} type="date" name='dateTo' id="dateInput" className="flex items-center h-12 px-4 w-34 bg-gray-200 ml-0 mt-2  rounded focus:outline-none focus:ring-2 lg:ml-5"/>

           </div>
           <div className="m-1">

             <label className="font-semibold text-xs mt-3"             htmlFor="passwordField">Personas</label>
             <input onChange={handleForm} name='guests' className="flex items-center h-12 px-4 w-20 bg-gray-200 mt-2             rounded focus:outline-none focus:ring-2"type="number" min="0" placeholder='x1'/>
           </div>
             <Link to={`/places/${form.city}/${form.guests}/${form.dateFrom}/${form.dateTo}`} className="flex items-center justify-center h-12 px-6 w-64            bg-tryGreen mt-8 rounded font-bold text-sm text-white            hover:bg-[#7fda89] mx-2">Buscar alojamiento </Link>
   
 </form>
  ):(
    <form  className="  flex flex-col items-center bg-white rounded shadow-lg p-4 mt-0  lg:flex-row " action="">
           <div >

             <label className="font-semibold text-xs" htmlFor="usernameField">City</label>
             <select onChange={handleForm} name='city' id="ciudades" className="flex items-center h-12 px-4 w-34  bg-gray-200 mt-2 rounded focus:outline-none focus:ring-2">
                   <option value="capilla">Capilla del Monte</option>
                   <option value="marcos">San Marcos Sierras</option>
             </select>
             
           </div>
           <div className="m-1">

             <label className="font-semibold text-xs mt-3 m-0 lg:ml-5" htmlFor="passwordField ">From</           label>
             <input onChange={handleForm} name='dateFrom' type="date" id="dateInput" className="flex items-center h-12 px-4 w-34 bg-gray-200 ml-0 mt-2              rounded focus:outline-none focus:ring-2 lg:ml-5"/>

           </div>
           <div className="m-1">

             <label className="font-semibold text-xs mt-3 m-0 lg:ml-5"  htmlFor="passwordField">To</label>
             <input onChange={handleForm}
            //   type={inputType} onClick={()=>setInputType('date')}
            //  onBlur={()=>setInputType('text')}
             type='date'
             placeholder='dd-mm-yyyy' name='dateTo' id="dateInput" className="flex items-center h-12 px-4 w-34 bg-gray-200 ml-0 mt-2  rounded focus:outline-none focus:ring-2 lg:ml-5"/>

           </div>
           <div className="m-1">

             <label className="font-semibold text-xs mt-3"             htmlFor="passwordField">Guests</label>
             <input onChange={handleForm} name='guests' className="flex items-center h-12 px-4 w-20 bg-gray-200 mt-2             rounded focus:outline-none focus:ring-2"type="number" min="0" placeholder='x1'/>
           </div>

           <Link   to={`/places/${form.city}-${form.guests}-${form.dateFrom}-${form.dateTo}`} className="flex items-center justify-center h-12 px-6 w-64            bg-[#259073] mt-8 rounded font-bold text-sm text-white            hover:bg-[#7fda89] mx-2">
              Search
           </Link>
   
      </form>
    ) 
}
    </div>
)
    
}
