import {CONSTANTS} from '../constants';
const {ACTIONTYPES} = CONSTANTS;

function reducer(state, action) {
    console.log(action);
    switch(action.type) {
        case ACTIONTYPES.GET_MESSAGE_SUCCESS: {
            return {
                ...state,
                messages: action.payload
            }
        }
        case ACTIONTYPES.GET_MESSAGE_ERROR: {
            return {
                ...state,
                error: action.error
            }
        }
    }
    return state;
}


export default reducer