import {combineReducers} from 'redux'
import {CHECK_AUTH, AUTH_DATA, AUTH_ERROR, SEARCH_RESULT, SEARCH_ERROR} from '../actions/types'

const authReducuer = (state={
    loading: true,
    authorized: false,
}, action) =>{
    switch(action.type){
        case CHECK_AUTH:
            return {...state, ...action.payload}
        case AUTH_DATA:
            return {...state, userData: {...action.payload}}
        case AUTH_ERROR:
            return {...state, error: action.payload}
        default:
            return state
    }
}

const searchReducer = (state={result:{tracks: []}}, action) => {
    switch(action.type){
        case SEARCH_RESULT:
            return{...state, result: {tracks: action.payload.tracks.items}}
        case SEARCH_ERROR:
            return {...state, error: action.payload}
        default:
            return state
    }
}

const playerReducer = (state={}, action) =>{
    switch(action.type){
        default:
            return state
    }
}

export default combineReducers({
    auth: authReducuer,
    search: searchReducer,
    player: playerReducer
})