import * as actionTypes from '../actions/actionTypes' ;
import{UpdateObj } from '../utility' ;


const intialState={
    refreshToken:null,
    accessToken:null,
    loading:false ,
    username: null,
    error:null,
    email:null
}

















const authStart = (state ,action) => {
    return UpdateObj(state,{
        error : null,
        loading : true 
    })
}

const authSucces = (state,action) => {
    return UpdateObj (state,{
        accessToken: action.accessToken,
        refreshToken:action.refreshToken,
        loading : false ,
        error : null ,
        username : action.username,
        email:action.email

    })
}

const authFail = (state,action) => {
    return UpdateObj(state,{
        error : action.error,
        loading: false
    })
}


const authLogout = (state,action) => {
    
    return UpdateObj(state,{
        accessToken : null ,
        refreshToken:null
    })
}
























export const authReducer=(state=intialState,action)=>{
    switch(action.type) {
        case actionTypes.AUTH_START: return authStart(state,action)
        case actionTypes.AUTH_SUCCESS : return authSucces(state,action)
        case actionTypes.AUTH_FAIL: return authFail(state,action)
        case actionTypes.AUTH_LOGOUT : return authLogout(state,action)
        default  : return state
    }
}