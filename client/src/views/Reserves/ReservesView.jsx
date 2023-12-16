import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getReserves } from "../../redux/actions";

export default function Reserves(){
    let dispatch = useDispatch()
    let userRdx = useSelector(state => state.user)
    useEffect(()=>{
        dispatch(
            getReserves(userRdx.id)
        )
    },[])

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

