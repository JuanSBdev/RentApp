import { GET_DATE, GET_FORM, GET_GUESTS, GET_NAME, CHA_LA } from "./action_types"
const initialState = {
    place: [],
    language: 'es'
}

 const reducer = (state = initialState, action) => {
    switch (action.type) {
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

        default:
            return state
    }
}
export default reducer;