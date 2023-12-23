import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getReserves } from "../../redux/actions";
import Styles from "./ReservesView.module.css";

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
    let placeRdx = useSelector(state=> state.place)
 return(
    <div className={Styles.wrapper}>
        {lang === 'es' ? (
            <div className={Styles.wrapperEs}>

                    <h1 className="text-white m-4">Mis reservas</h1>
                    {reservesRdx.map(r =>( 
                        <div className="">
                            <p className="text-white"> { placeRdx.find((p) => p.id === r.placeId)?.name  }</p>
                            <p className="text-white"> Estado {r.status}</p>
                            <p className="text-white"> desde {r.dateInit}</p>
                            <p className="text-white"> hasta {r.dateEnd}</p>
                            <p className="text-white"> precio {r.total}$</p>
                        </div>

                     ))}
            </div>
                    
        ):(
        <div className="">
            <h1 className="text-white m-4">Reserves</h1>
            {reservesRdx.map(r =>(
                <div className="">
                            <p className="text-white"> { placeRdx.find((p) => p.id === r.placeId)?.name  }</p>
                            <p className="text-white"> Status {r.status}</p>
                            <p className="text-white"> from {r.dateInit}</p>
                            <p className="text-white"> to {r.dateEnd}</p>
                            <p className="text-white"> price {r.total}$</p>
                        </div>
                                     ))}
        </div>
        )}
    </div>
 )
}

