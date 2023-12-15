import React from "react";
import { useSelector } from "react-redux";

export default function Reserves(){
    let lang = useSelector(state=> state.language)
 return(
    <div className="">
        {lang === 'es' ? (
                    <h1>Reservas</h1>

        ):(
                    <h1>Reserves</h1>

        )}
    </div>
 )
}

