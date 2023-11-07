import axios from 'axios'
import  {CHA_LA, GET_ALL, GET_DATE, GET_FORM, GET_GUESTS, GET_NAME, POST_USER} from './action_types'

const URL = 'http://localhost:63076'

export const changeLanguage = (lang)=>{
    return async(dispatch)=>{
        try {
            dispatch({
                type: CHA_LA,
                payload: lang
            })
            
        } catch (error) {
            console.log( "redux LANGUAGE error" + error)
        }
    }
}
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
export const getAllPlaces = ()=>{
    return async (dispatch)=>{
        let endpoint =  `${URL}/start`
        try {
            let response = await axios(endpoint);
            let data = response.data;
            dispatch({
                type: GET_ALL,
                payload: data
            })
        } catch (error) {
            console.log("redux error get_all" + error )

        }
    }
}

// user

export const postUser = (user)=>{
    return async (dispatch)=>{
        let endpoint =  `${URL}/user`
        let postData = {
            mail: user.email,
            isAdmin: user.isAdmin
        }

        try {
             console.log(postData)
            let response = await axios.post(endpoint, postData);
            let data = response.data;
            dispatch({
                type: POST_USER,
                payload: data
            })
        } catch (error) {
            console.log("redux error postUser" + error )

        }
    }
}