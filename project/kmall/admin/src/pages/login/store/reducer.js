
import * as types  from './actionTypes.js'

import { fromJS } from 'immutable'

const defaultState = fromJS({
    idFaceing:false
})

export default (state=defaultState,action)=>{
    if(action.type == types.LOGIN_START_ITEM){
        return state.set('idFaceing',true)
    }
    if(action.type == types.LOGIN_DONE_ITEM){
        return state.set('idFaceing',false)
    }
   
    return state
}