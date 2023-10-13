import React from 'react'
import Styles from './FormStart.module.css'
import '../../../dist/output.css'; // Ajusta la ruta según la ubicación de tu archivo CSS


export default function FormStart() {
  return (
    <div >
       
        
        <form class="flex flex-row items-center bg-white rounded shadow-lg p-5 mt-12" action="">
            <div className="">

	            <label class="font-semibold text-xs" for="usernameField">Ciudad</           label>
	            <input class="flex items-center h-12 px-4 w-64 bg-gray-200 mt-2             rounded focus:outline-none focus:ring-2" type="text"/>
            </div>
            <div class="m-4">

	            <label class="font-semibold text-xs mt-3" for="passwordField">Fecha</           label>
	            <input class="flex items-center h-12 px-4 w-64 bg-gray-200 mt-2             rounded focus:outline-none focus:ring-2"type="password"/>
            </div>
            <div className="">

	            <label class="font-semibold text-xs mt-3"             for="passwordField">Personas</label>
	            <input class="flex items-center h-12 px-4 w-64 bg-gray-200 mt-2             rounded focus:outline-none focus:ring-2"type="password"/>
            </div>
	            <button class="flex items-center justify-center h-12 px-6 w-64            bg-blue-600 mt-8 rounded font-bold text-sm text-blue-100            hover:bg-blue-700 mx-2">Buscar alojamiento</button>
		
	</form>
    </div>
  )
}
