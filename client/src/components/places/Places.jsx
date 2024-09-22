import React from 'react'
import { useSelector } from 'react-redux'
import Styles from  './Places.module.css'
import '../../../dist/output.css'; // Ajusta la ruta según la ubicación de tu archivo CSS
import { Link } from 'react-router-dom';

export default function Places(props) {

    let lang = useSelector(state=> state.language)
  return (
    
  <div  className={` ${Styles.wrapper} wrapper  antialiased text-gray-900`}>
    { lang === 'en' ? (
        <Link to={`/details/${props.id}`}>
      <div className={`${Styles.card} `}>

        <div>
            
            <img src="https://source.unsplash.com/random/100x100" alt=" random imgee" className="w-full object-cover object-center rounded-lg shadow-md"/>    
            
         <div className="relative px-4 -mt-16  ">
           <div className="bg-white p-6 rounded-lg shadow-lg">
            <div className="flex items-baseline">
              <span className="bg-[#55EB7A] text-teal-800 text-xs px-2 inline-block rounded-full  uppercase font-semibold tracking-wide">
                Ab.
              </span>
              <div className="ml-2 text-gray-600 uppercase text-xs font-semibold tracking-wider">
            {props.max_occupancy_per_room}  &bull; {props.type}
          </div>  
            </div>
            
            <h4 className="mt-1 text-xl font-semibold uppercase leading-tight truncate">{props.name}</h4>
            <span className="text-gray-600 text-sm"> {props.location} </span>
                
        <div className="flex flex-row justify-between ">


          <div className="mt-1">
            <span className="text-[#55EB7A] text-md font-semibold">{props.rating} / 5 </span>
            <span className="text-sm text-gray-600">(234)</span>
          </div>

        <div className="mt-1">
            <span className="text-gray-600 text-sm"> from </span>
            {props.price_per_night}$
            <span className="text-gray-600 text-sm"> pn</span>
          </div>

        </div>
          
          
          </div>  
          </div>
          
        </div>
                    </div>
        </Link>
    ):(
      
        <Link to={`/details/${props.id}`}>
      <div className={`${Styles.card} `}>

      <div>
          
          <img src="https://picsum.photos/200/300" alt=" random imgee" className="w-full object-cover object-center rounded-lg shadow-md"/>    
          
       <div className="relative px-4 -mt-16  ">
         <div className="bg-white p-6 rounded-lg shadow-lg">
          <div className="flex items-baseline">
            <span className="bg-[#55EB7A] text-teal-800 text-xs px-2 inline-block rounded-full  uppercase font-semibold tracking-wide">
              Disp.
            </span>
            <div className="ml-2 text-gray-600 uppercase text-xs font-semibold tracking-wider">
          {props.max_occupancy_per_room}  &bull; {props.type}
        </div>  
          </div>
          
          <h4 className="mt-1 text-xl font-semibold uppercase leading-tight truncate">{props.name}</h4>
          <span className="text-gray-600 text-sm"> {props.location} </span>
              
      

          <div className=" flex flex-row justify-between ">
          <div className="mt-1">
                    <span className="text-gray-600 text-sm"> desde </span>
                    {props.price_per_night}$
                    <span className="text-gray-600 text-sm"> pn</span>
                  </div>
                  <div className="mt-1">
                    <span className="text-[#55EB7A] text-md font-semibold">{props.rating} / 5 </          span>
                    <span className="text-sm text-gray-600">(214)</span>
                  </div> 
          </div>

        </div>
       </div>
        
      </div>
                  </div>
    </Link>
    )

    }
       
  </div>



)
}
