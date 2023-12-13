import { useDispatch } from "react-redux"
import { getPlaceByDate, getPlaceByGuest, getPlaceByName, getPlacesComplete } from "../../redux/actions"

export const validateDispatch = (form)=>{
    let dispatch = useDispatch()
        if(form.place & form.dateFrom & form.dateTo & form.guests){   dispatch( getPlacesComplete(form.place, form.dateFrom, form.dateTo, form.guests))}
        if(form.place & !form.dateFrom)  dispatch(getPlaceByName(form.place))
        else if(!form.place & form.dateFrom || form.dateTo)  {dispatch(getPlaceByDate(form.dateFrom, form.dateTo))}
        else if(!form.place & !form.dateFrom & !form.dateTo & form.guests)  { dispatch(getPlaceByGuest(form.guests))}
        
}
