import axios from 'axios'
import  {GET_DATE, GET_FORM, GET_GUESTS, GET_NAME} from './action_types'
 

export const getPlacesComplete = (place, dateInit, dateFinish, guests)=>{
    return async (dispatch) =>{
        let endpoint = `http://localhost:63076/place/${place}/${dateInit}/${dateFinish}/${guests}`
        try {
            let response = await axios(endpoint)
            let data = response.data;
            dispatch({
                type: GET_FORM,
                payload: data
            })
        } catch (error) {
            console.log( "redux FORM error" + error)

            
        }
    }
}

export const getPlaceByName = (placeName) =>{
    return async(dispatch) =>{
        let endpoint = `http://localhost:63076/place/in/${placeName}`
        try {
            const response = await axios.get(endpoint)
            const data = response.data;
            // console.log(data)
            dispatch({
                type: GET_NAME,
                payload: data

            })
        } catch (error) {
            console.log(error + "redux error")
        }
    }
} 

export const getPlaceByGuest = (guestsQ)=>{
    return async (dispatch)=>{
        let endpoint = `http://localhost:63076/place/for/${guestsQ}`
        try {
            const response = await axios(endpoint)
            const data = response.data;
            dispatch({
                type: GET_GUESTS,
                payload: data

            })
        } catch (error) {
            console.log(error + "redux error")
        }
    }
}

export const getPlaceByDate = (dateInit, dateFinish)=>{
    return async (dispatch)=>{
        let endpoint =  `http://localhost:63076/place/dates/?dateInit=${dateInit}&dateFinish=${dateFinish}`
        try {
            let response = await axios(endpoint);
            let data = response.data;
            dispatch({
                type: GET_DATE,
                payload: data
            })
        } catch (error) {
            console.log("redux error get_date" + error )

        }
    }
}