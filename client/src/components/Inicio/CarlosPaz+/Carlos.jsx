import React from 'react'
import '../../../../dist/output.css'; // Ajusta la ruta según la ubicación de tu archivo CSS
import Styles from './Carlos.module.css'
import { useDispatch, useSelector } from 'react-redux';
import { getPlaceByName } from '../../../redux/actions';



export default function Carlos() {
    let dispatch = useDispatch()
    let lang = useSelector(state => state.language)

    let buscarCarlos = ()=>{
        dispatch(getPlaceByName('carlos'))
    }
    
  return (
    <div>
        {lang === 'es' ? (
            <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
            <a onClick={buscarCarlos}>
                <img className={`rounded-t-lg ${Styles.img_card}`} src="https://i.ytimg.com/vi/W_3gklgnq3w/mqdefault.jpg" alt="" />
            </a>
            <div className="p-5">
                <a onClick={buscarCarlos}>
                    <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Temporada San Marcos Sierras  2024</h5>
                </a>
                <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">Encontrá tu alojamiento al mejor precio en San Marcos Sierras, Córdoba, para esta temporada 2023</p>
                <a onClick={buscarCarlos} className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                    Buscar
                     <svg className="w-3.5 h-3.5 ml-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
                    </svg>
                </a>
            </div>
        </div>
        ):(
            <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
    <a onClick={buscarCarlos}>
        <img className={`rounded-t-lg ${Styles.img_card}`} src="https://i.ytimg.com/vi/W_3gklgnq3w/mqdefault.jpg" alt="" />
    </a>
    <div className="p-5">
        <a onClick={buscarCarlos}>
            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">San Marcos Sierras season  2024</h5>
        </a>
        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">Discover the most budget-friendly accommodations in San Marcos Sierras, Córdoba, for the 2024 season.</p>
        <a onClick={buscarCarlos} className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
            search here
             <svg className="w-3.5 h-3.5 ml-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
            </svg>
        </a>
    </div>
</div>
        )

        }
        


    </div>
  )
}
