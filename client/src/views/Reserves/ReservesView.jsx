import React from "react";
import { useSelector } from "react-redux";

export default function Reserves(){
    let lang = useSelector(state=> state.language)
 return(
    <div className="">
        {lang === 'es' ? (
                    <h1 className="text-white m-4">Mis reservas</h1>
                    

        ):(
                    <h1 className="text-white m-4">Reserves</h1>

        )}
    </div>
 )
}

