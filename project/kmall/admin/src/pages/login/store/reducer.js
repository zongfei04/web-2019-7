
import * as types  from './actionTypes.js'

import { fromJS } from 'immutable'

const defaultState = fromJS({
    idFaceing:true
})

export default (state=defaultState,action)=>{
    
   
    return state
}