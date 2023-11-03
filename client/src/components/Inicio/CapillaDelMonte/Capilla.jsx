import React from 'react'
import '../../../../dist/output.css'; // Ajusta la ruta según la ubicación de tu archivo CSS
import Styles from './Capilla.module.css'
import { useDispatch, useSelector } from 'react-redux';
import { getPlaceByName } from '../../../redux/actions';



export default function Capilla() {


    let dispatch = useDispatch()

    let lang = useSelector(state=> state.language)

    let buscarEnCapilla = ()=>{
        dispatch(getPlaceByName('capilla'))
    }
  return (
    <div>
            {lang === 'es' ? (
            <div class=" mb-0 max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
    <a onClick={buscarEnCapilla}>
        <img class={`rounded-t-lg ${Styles.img_card}`} src="https://www.voydeviaje.com.ar/resizer/6-koTns6uUvdPUIGT4njV_He6TM=/980x640/smart/filters:quality(75):format(webp)/cloudfront-us-east-1.images.arcpublishing.com/grupoclarin/QUBMPWQO2VEXRLCB5XTUTCHKYY.jpg" alt="" />
    </a>
    <div class="p-5">
        <a onClick={buscarEnCapilla}>
            <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Temporada Capilla Del Monte 2023</h5>
        </a>
        <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">Encontrá tu alojamiento al mejor precio en Capilla Del Monte, Córdoba para esta temporada 2024</p>
        <button onClick={buscarEnCapilla}  class="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
            Buscar
             <svg class="w-3.5 h-3.5 ml-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
            </svg>
        </button>
    </div>
            </div>
            ):(
                
        
            <div class=" mb-0 max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                <a onClick={buscarEnCapilla}>
                    <img class={`rounded-t-lg ${Styles.img_card}`} src="https://www.voydeviaje.com.ar/resizer/6-koTns6uUvdPUIGT4njV_He6TM=/980x640/smart/filters:quality(75):format(webp)/cloudfront-us-east-1.images.arcpublishing.com/grupoclarin/QUBMPWQO2VEXRLCB5XTUTCHKYY.jpg" alt="" />
                </a>
                <div class="p-5">
                    <a onClick={buscarEnCapilla}>
                        <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white"> Capilla Del Monte season 2024</h5>
                    </a>
                    <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">Explore the best accommodation rates in Capilla Del Monte, Córdoba, for the upcoming 2024 season.</p>
                    <button onClick={buscarEnCapilla}  class="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                        Search here
                         <svg class="w-3.5 h-3.5 ml-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
                        </svg>
                    </button>
                </div>
            </div>
                
            )}

    </div>
  )
}
