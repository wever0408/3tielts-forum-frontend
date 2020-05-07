
import * as typeAction from '../constant/actionType';

const user = (state = {}, action) => {
   switch (action.type) {
       case typeAction.SET_CURRENT_USER: {
            return {...state, user: action.user};
        }
        case typeAction.GET_CURRENT_USER: {
            return {...action.user};
        }
        case typeAction.UPDATE_CURRENT_USER: {
            return {...action.user};
        }
       default:
            return state
   }
}

export default user;