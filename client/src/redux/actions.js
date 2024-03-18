import axios from 'axios'
import  {GET_AB, CHA_LA, GET_ALL, GET_DATE, GET_DET, GET_FORM, GET_GUESTS, GET_NAME, POST_USER, POST_RES, GET_RES, DEL_RES} from './action_types'

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
export const getReserves =  (userId)=>{
    return async(dispatch)=>{
        let endpoint = `${URL}/reserve/${userId}`;
        try {
            let response = await axios(endpoint)
            let data = response.data;
            dispatch({
                type: GET_RES,
                payload: data
            })
            // console.log(data)
        } catch (error) {
            console.log( "redux RESERVES error" + error)
            
        }
    }
}
export const deleteReserve =  (reserveId)=>{
    return async(dispatch)=>{
        let endpoint = `${URL}/reserve/${reserveId}`;
        try {
            let response = await axios.delete(endpoint)
            let data = response.data;
            dispatch({
                type: DEL_RES,
                payload: data
            })
        } catch (error) {
            console.log( "redux Delete-RESERVE error" + error)
            
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

export const getPlaceByGuest = (city, guestsQ)=>{
    return async (dispatch)=>{
        let endpoint = `${URL}/place/for/${city}/${guestsQ}`
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

export const postReserve = (userId, placeId, dateInit, dateEnd)=>{
    return async (dispatch)=>{
        let endpoint =  `${URL}/reserve`
        let postData = {
            dateInit,
            dateEnd,
            userId,
            placeId
        }
        try {
            let result = await axios.post(endpoint, postData)
            let data = result.data;
            dispatch({
                type: POST_RES,
                payload: data
            })
            
        } catch (error) {
            console.log("redux error postReserve" + error )

        }
    }
}
export const postUser = (user)=>{
    return async (dispatch)=>{
        let endpoint =  `${URL}/user`
        let postData = {
            mail: user.email,
            isAdmin: user.isAdmin
        }
        try {
            let response = await axios.post(endpoint, postData);
            let data = response.data[0];
            dispatch({
                type: POST_USER,
                payload: data
            })
        } catch (error) {
            console.log("redux error postUser" + error )

        }
    }
}