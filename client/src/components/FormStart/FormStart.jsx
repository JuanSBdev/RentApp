import React, {useState} from 'react'
import Styles from './FormStart.module.css'
import '../../../dist/output.css'; // Ajusta la ruta según la ubicación de tu archivo CSS
import { useDispatch } from 'react-redux';
import { getPlaceByName } from '../../redux/actions';


export default function FormStart() {

  let dispatch = useDispatch()
  
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
let submitForm =(e)=>{
  e.preventDefault()
  console.log(form.city + 'from form')
  dispatch(getPlaceByName(form.city))

  // window.scrollBy(0, 500);
}


  return (
    <div className= { `${Styles.wrapper} flex flex-col items-center justify-center w-screen h-screen` }  >
       
        
        <form  className=" border border-[#259073] flex flex-col items-center bg-[#fcffee] rounded shadow-lg p-5 mt-0  lg:flex-row " action="">
            <div >

	            <label className="font-semibold text-xs" htmlFor="usernameField">Ciudad</label>
              <select onChange={handleForm} name='city' id="ciudades" className="flex items-center h-12 px-4 w-34  bg-gray-200 mt-2 rounded focus:outline-none focus:ring-2">
                    <option value="capilla">Capilla del Monte</option>
                    <option value="carlos">Carlos Paz</option>
                    <option value="falda">La Falda</option>
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
	            <button onClick={submitForm} className="flex items-center justify-center h-12 px-6 w-64            bg-[#259073] mt-8 rounded font-bold text-sm text-blue-100            hover:bg-[#7fda89] mx-2">Buscar alojamiento</button>
		
	</form>
    </div>
  )
}
