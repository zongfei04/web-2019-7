
import { fromJS } from 'immutable'
const defaultState = fromJS({
	usernum:100,
	ordernum:50,
	productnum:10
})
import * as types from './actionTypes.js'

export default (state=defaultState,action)=>{
	
	return state
}