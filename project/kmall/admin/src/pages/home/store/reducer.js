
import { fromJS } from 'immutable'
const defaultState = fromJS({
	usernum:100,
	ordernum:50,
	productnum:10
})
import * as types from './actionTypes.js'

export default (state=defaultState,action)=>{
	if(action.type == types.SET_COUNT){
		return state.merge({
			usernum:action.payload.usernum,
			ordernum:action.payload.ordernum,
			productnum:action.payload.productnum
		})
	}
	return state
}