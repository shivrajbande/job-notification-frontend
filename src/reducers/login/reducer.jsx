import { ACTIONS } from "./action";

const initialState = {
    loading  : false,
    error:null,
    user:null
}
export function loginReducer(state=initialState,action){
    switch(action.type){
        case ACTIONS.LOGIN_REQUEST:
            return {...state,loading:true,error:null};
        case ACTIONS.LOGIN_SUCCESS:
            return {...state,loading:false,user:action.payload,error:null}
        case ACTIONS.LOGIN_ERROR:
            return {...state,loading:false,error:action.payload};
        default:
            return state;
    }

}