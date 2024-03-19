import React from 'react'
import '../../../../dist/output.css'; // Ajusta la ruta según la ubicación de tu archivo CSS
import Styles from './SanMarcos.module.css'
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';


export default function Carlos() {
    let lang = useSelector(state => state.language)
    
  return (
    <div>
        {lang === 'es' ? (
                <Link to={`/places/marcos`}> 
            <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                <img className={`rounded-t-lg ${Styles.img_card}`} src="https://i.ytimg.com/vi/W_3gklgnq3w/mqdefault.jpg" alt="" />
                <p>San Marcos Sierras</p>            
          
        </div>
            </Link>
        ):(
            <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                <Link to={`/places/marcos`}> 
    
        <img className={`rounded-t-lg ${Styles.img_card}`} src="https://i.ytimg.com/vi/W_3gklgnq3w/mqdefault.jpg" alt="" />
    
    <div className="p-5">
        
            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">San Marcos Sierras season  2024</h5>
        
        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">Discover the most budget-friendly accommodations in San Marcos Sierras, Córdoba, for the 2024 season.</p>
        <p  className="flex items-center justify-center h-12 px-6 w-64 bg-[#259073] mt-8 rounded font-bold text-sm text-white  hover:bg-[#7fda89] mx-2">
            search here
            </p>
             <svg className="w-3.5 h-3.5 ml-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
            </svg>
        
    </div>
    </Link>
</div>
        )

        }
        


    </div>
  )
}
