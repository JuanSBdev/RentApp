import React, {useState} from 'react'

import { useDispatch, useSelector } from 'react-redux';
import { getAvailability } from '../../../redux/actions';



export default function FormA() {
  let dispatch = useDispatch()
  let lang = useSelector(state=> state.language)
  let detail = useSelector(state=> state.detail[0])

  const [inputType, setInputType] = useState('text');
  
  let [form, setForm] = useState({
    city: "capilla",
    guests:"1",
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

let handleDate = (e)=>{
  e.preventDefault()
  
  let {value, name} = e.target;
  setForm((prevValues)=>({
    ...prevValues,
    [name]: value
  }))
}
let submitForm =(e)=>{
  e.preventDefault()
  // console.log(form.dateTo, form.dateFrom, form.guests, detail.id + 'from form Availability')
  if(!form.dateFrom && !form.dateTo && !form.guests){
      alert('Faltan datos')
  }
  else if(form.dateFrom && form.dateTo && !form.guests) {
    alert('Faltan datos')
  }
  else if(!form.dateFrom && !form.dateTo && form.guests){    alert('Faltan datos')
  }
  else if(!form.dateFrom && form.dateTo && form.guests){    alert('Faltan datos')
  }
  else if(form.dateFrom && !form.dateTo && form.guests){    alert('Faltan datos')
  }
  else  {
    dispatch( getAvailability(detail.id, form.dateFrom, form.dateTo, form.guests))
  }
 
  
}

return (
<div className= { ` flex items-center justify-center w-100 h-screen  -my-5` }  >
   {lang === 'es' ? (
       
       <form  className=" border border-[#259073] flex flex-col items-center bg-[#fcffee] rounded shadow-lg p-5 mt-0  lg:flex-row " action="">
           
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
             <button onClick={submitForm} className="flex items-center justify-center h-12 px-6 w-64            bg-[#259073] mt-8 rounded font-bold text-sm text-blue-100            hover:bg-[#7fda89] mx-2">Ver precios</button>
   
       </form>
  ):(
    <form  className=" border border-[#259073] flex flex-col items-center bg-[#fcffee] rounded shadow-lg p-5 mt-0  lg:flex-row " action="">
           
           <div className="m-1">

             <label className="font-semibold text-xs mt-3 m-0 lg:ml-5" htmlFor="passwordField ">From</           label>
             <input onChange={handleForm} name='dateFrom' type="date" id="dateInput" className="flex items-center h-12 px-4 w-34 bg-gray-200 ml-0 mt-2              rounded focus:outline-none focus:ring-2 lg:ml-5"/>

           </div>
           <div className="m-1">

             <label className="font-semibold text-xs mt-3 m-0 lg:ml-5"  htmlFor="passwordField">To</           label>
             <input onChange={handleForm} type="date" name='dateTo' id="dateInput" className="flex items-center h-12 px-4 w-34 bg-gray-200 ml-0 mt-2  rounded focus:outline-none focus:ring-2 lg:ml-5"/>

           </div>
           <div className="m-1">

             <label className="font-semibold text-xs mt-3"             htmlFor="passwordField">Guests</label>
             <input onChange={handleForm} name='guests' className="flex items-center h-12 px-4 w-20 bg-gray-200 mt-2             rounded focus:outline-none focus:ring-2"type="number" min="0" placeholder='x1'/>
           </div>
             <button onClick={submitForm} className="flex items-center justify-center h-12 px-6 w-64            bg-[#259073] mt-8 rounded font-bold text-sm text-blue-100            hover:bg-[#7fda89] mx-2">Prices</button>
   
       </form>
    
    ) 
}
    </div>
)
    
}
