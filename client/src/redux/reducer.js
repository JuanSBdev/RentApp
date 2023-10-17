import { GET_NAME } from "./action_types"
const initialState = {
    place: []
}

 const reducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_NAME:
            return {
                ...state,
                place: action.payload
            }
        default:
            return state
    }
}
export default reducer;