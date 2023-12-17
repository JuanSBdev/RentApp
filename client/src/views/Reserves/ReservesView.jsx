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
    let reservesRdx = useSelector(state=> state.reserves)
 return(
    <div className="">
        {lang === 'es' ? (
            <div className="">

                    <h1 className="text-white m-4">Mis reservas</h1>
                    {reservesRdx.map(r =>( <p className="text-white">{r.id}</p> ))}
            </div>
                    

        ):(
        <div className="">

<h1 className="text-white m-4">Reserves</h1>
{reservesRdx.map(r =>( <p className="text-white">{r.id}</p> ))}
        </div>
        )}
    </div>
 )
}

