
import { fromJS } from 'immutable'
const defaultState = fromJS({
	list:[],
	current:0,
	pageSize:0,
	total:0,
	idFaceing:false,
	categories:[]
})
import * as types from './actionTypes.js'

export default (state=defaultState,action)=>{
	if(action.type == types.SET_PAGE){
		return state.merge({
			list:fromJS(action.payload.list),
			current:fromJS(action.payload.current),
			pageSize:fromJS(action.payload.pageSize),
			total:fromJS(action.payload.total),
			idFaceing:fromJS(action.payload.idFaceing)
		})
	}
	if(action.type == types.PAGE_START_ITEM){
        return state.set('idFaceing',true)
    }
    if(action.type == types.PAGE_DONE_ITEM){
        return state.set('idFaceing',false)
    }
    if(action.type == types.SET_LEVEL_ACTION){
    	return state.set('categories',fromJS(action.payload))
    }
	return state
}