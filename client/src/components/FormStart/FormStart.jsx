import React from 'react'
import Styles from './FormStart.module.css'
import '../../../dist/output.css'; // Ajusta la ruta según la ubicación de tu archivo CSS


export default function FormStart() {
  return (
    <div class="flex flex-col items-center justify-center w-screen h-screen " >
       
        
        <form class="flex flex-row items-center bg-white rounded shadow-lg p-5 mt-2" action="">
            <div >

	            <label class="font-semibold text-xs" for="usernameField">Ciudad</label>
              <select id="ciudades" class="flex items-center h-12 px-4 w-34 bg-gray-200 mt-2             rounded focus:outline-none focus:ring-2">
                    <option value="capilla">Capilla del Monte</option>
                    <option value="carlos">Carlos Paz</option>
                    <option value="falda">La Falda</option>
              </select>
	            {/* <input class="flex items-center h-12 px-4 w-64 bg-gray-200 mt-2             rounded focus:outline-none focus:ring-2" type="text"/> */}
            </div>
            <div class="m-1">

	            <label class="font-semibold text-xs mt-3 ml-5" for="passwordField">Desde</           label>
	            <input type="date" id="dateInput" class="flex items-center h-12 px-4 w-34 bg-gray-200 ml-5 mt-2              rounded focus:outline-none focus:ring-2"/>

            </div>
            <div class="m-1">

	            <label class="font-semibold text-xs mt-3" for="passwordField">Hasta</           label>
	            <input type="date" id="dateInput" class="flex items-center h-12 px-4 w-34 bg-gray-200 mt-2 mr-5             rounded focus:outline-none focus:ring-2"/>

            </div>
            <div className="m-1">

	            <label class="font-semibold text-xs mt-3"             for="passwordField">Personas</label>
	            <input class="flex items-center h-12 px-4 w-20 bg-gray-200 mt-2             rounded focus:outline-none focus:ring-2"type="number" min="0" placeholder='x1'/>
            </div>
	            <button class="flex items-center justify-center h-12 px-6 w-64            bg-blue-600 mt-8 rounded font-bold text-sm text-blue-100            hover:bg-blue-700 mx-2">Buscar alojamiento</button>
		
	</form>
    </div>
  )
}
