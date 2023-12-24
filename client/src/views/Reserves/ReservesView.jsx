import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { deleteReserve, getReserves } from "../../redux/actions";
import Styles from "./ReservesView.module.css";

export default function Reserves(){
    
    let reservesRdx = useSelector(state=> state.reserves)
    let userRdx = useSelector(state => state.user)
    let lang = useSelector(state=> state.language)
    let placeRdx = useSelector(state=> state.place)
    let dispatch = useDispatch()

    useEffect(()=>{
        dispatch(
            getReserves(userRdx.id)
        )
    },[dispatch, userRdx.id])


    let cancelReserve = async (idReserve)=>{
            await dispatch(deleteReserve(idReserve))
            dispatch(getReserves(userRdx.id))
    }

 return(
    <div className={Styles.wrapper}>
            <h1 className="text-white mt-4">Mis reservas</h1>
        {lang === 'es' ? (
            <div className={Styles.wrapperEs}>

                    {reservesRdx.map((r, index) =>( 
                        <div key={index} className={Styles.reserves}>
                            
                                <div className={Styles.placeName}>
                                    <p className="text-white" > { placeRdx.find((p) => p.id === r.placeId)?.name  }</p>
                                </div>
                                <div className="">
                                    <p className={Styles.dataText}>desde</p>
                                    <p className="text-white">  {r.dateInit.slice(0, 10)}</p>
                                </div>
                                <div className="">
                                    <p className={Styles.dataText}>hasta</p>
                                    <p className="text-white"> {r.dateEnd.slice(0, 10)}</p>
                                </div>
                                <div className="">
                                    <p className={Styles.dataText}>precio</p>
                                    <p className="text-white"> {r.total }$</p>
                                </div>
                                <div className="">
                                    <p className={Styles.dataText}>estado</p>
                                    <p className="text-white">  {r.status}</p>
                                </div>
                                    <button className={Styles.btnPay}>Pagar</button>
                                    <button  className={Styles.btnCancel}
                                            onClick={()=>cancelReserve(r.id) +  console.log(r.id) }
                                    >Cancelar</button>
                           
                            
                        </div>

                     ))}
            </div>
                    
        ):(
            <div className={Styles.wrapperEs}>

            {reservesRdx.map(r =>( 
                <div className={Styles.reserves}>
                    
                        <div className={Styles.placeName}>
                            <p className="text-white" > { placeRdx.find((p) => p.id === r.placeId)?.name  }</p>
                        </div>
                        <div className="">
                            <p className={Styles.dataText}>from</p>
                            <p className="text-white">  {r.dateInit.slice(0, 10)}</p>
                        </div>
                        <div className="">
                            <p className={Styles.dataText}>to</p>
                            <p className="text-white"> {r.dateEnd.slice(0, 10)}</p>
                        </div>
                        <div className="">
                            <p className={Styles.dataText}>price</p>
                            <p className="text-white"> {r.total }$</p>
                        </div>
                        <div className="">
                            <p className={Styles.dataText}>status</p>
                            <p className="text-white">  {r.status}</p>
                        </div>
                            <button  className={Styles.btnPay}>Pay</button>
                            <button className={Styles.btnCancel}>Cancel</button>
                   
                    
                </div>

             ))}
    </div>
        )}
    </div>
 )
}

