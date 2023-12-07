import axios from 'axios'
import  {GET_AB, CHA_LA, GET_ALL, GET_DATE, GET_DET, GET_FORM, GET_GUESTS, GET_NAME, POST_USER} from './action_types'

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

export const getAvailability =  (id, dateInit, dateEnd, guests)=>{
    return async(dispatch)=>{
        let endpoint = `${URL}/availability?id=${id}&dateInit=${dateInit}&dateEnd=${dateEnd}&guests=${guests}`;
        try {
            let response = await axios(endpoint)
            let data = response.data;
        // console.log(id, dateInit, dateEnd, guests)
            dispatch({
                type: GET_AB,
                payload: data
            })
            
        } catch (error) {
            console.log( "redux AVAILABILITY error" + error)
            
        }
    }
}
export const getPlacesComplete = (place, dateInit, dateFinish, guests)=>{
    return async (dispatch) =>{
        let endpoint = `${URL}/place/${place}/${dateInit}/${dateFinish}/${guests}`
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
        let endpoint = `${URL}/place/in/${placeName}`
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
        let endpoint = `${URL}/place/for/${guestsQ}`
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
        let endpoint =  `${URL}/place/dates/?dateInit=${dateInit}&dateFinish=${dateFinish}`
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

export const getDetail = (id)=>{
    return  async (dispatch)=>{
        try {
            // console.log('disp'+ id)
            let response = await axios(`${URL}/place/${id}`)
            let data = response.data
            dispatch({
                type: GET_DET,
                payload: data
            })
        } catch (error) {
            console.log("redux error getDetail" + error )
        }
    }
}

export const postReserve = ()=>{
    
}