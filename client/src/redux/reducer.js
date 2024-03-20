import {GET_AB, GET_DATE, GET_FORM, GET_RES, GET_GUESTS, GET_NAME, CHA_LA, GET_ALL, GET_DET, POST_RES, POST_USER, DEL_RES } from "./action_types"
const initialState = {
    place: [],
    detail: [],
    availability:[],
    user:[],
    reserves:[],
    cityStart: [
        {name: 'Capilla del Monte'},
        {name: 'San Marcos Sierras'},
        {name: 'Cote d Azur'},
        {name: 'Bariloche'},
       ],
    language: 'es'
}

 const reducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_ALL:
            return{
                ...state,
            }
        case GET_AB:
            return{
                ...state,
                availability:action.payload
            }
        case CHA_LA:
            return{
                ...state,
                language: action.payload
            }
        case GET_FORM:
            return{
                ...state,
                place: action.payload

            }
        case GET_NAME:
            return {
                ...state,
                place: action.payload
            }
        case GET_GUESTS:
                return{
                    ...state,
                    place:action.payload
                }
        case GET_DATE:
                return{
                    ...state,
                    place:action.payload
                }
        case GET_DET:
            return{
                ...state,
                detail: action.payload,
                availability: []
            }
        case POST_USER:
            return{
                ...state,
                user: action.payload
            }
        case POST_RES:
            return{
                ...state,
            }
        case GET_RES:
            // console.log('reducer' + action.payload[0])
            return{
                ...state,
                reserves: action.payload
            }
        case DEL_RES:
            return{
                ...state,
            }

        default:
            return state
    }
}
export default reducer;