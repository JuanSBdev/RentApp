import axios from 'axios'
import  {GET_NAME} from './action_types'
 
export const getPlaceByName = (placeName) =>{
    return async(dispatch) =>{
        let endpoint = `http://localhost:63076/place/in/${placeName}`
        try {
            const response = await axios.get(endpoint)
            const data = response.data;
            console.log(data)
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
            
        } catch (error) {
            
        }
    }
}
