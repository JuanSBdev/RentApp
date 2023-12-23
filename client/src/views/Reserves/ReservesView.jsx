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
                        <div className={Styles.reserves}>
                            
                                <div className="">
                                    <p className="text-white"> { placeRdx.find((p) => p.id === r.placeId)?.name  }</p>
                                </div>
                                <div className="">
                                    <p>estado</p>
                                    <p className="text-white">  {r.status}</p>
                                </div>
                                <div className="">
                                    <p>desde</p>
                                    <p className="text-white">  {r.dateInit.slice(0, 10)}</p>
                                </div>
                                <div className="">
                                    <p>hasta</p>
                                    <p className="text-white"> {r.dateEnd.slice(0, 10)}</p>
                                </div>
                                <div className="">
                                    <p>precio</p>
                                    <p className="text-white"> {r.total }$</p>
                                </div>
                                    <button className={Styles.btnPay}>Pagar</button>
                                    <button className={Styles.btnCancel}>Cancelar</button>
                           
                            
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

