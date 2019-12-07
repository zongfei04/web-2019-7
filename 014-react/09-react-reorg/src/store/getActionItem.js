

import {CHANGE_ITEM,DEL_ITEM,ADD_ITEM,LOAD_ITEM} from './actionTypes.js'
import axios from 'axios'

export const getChangeItem = (val)=>({
		type:CHANGE_ITEM,
		payload:val
})
export const getAddItem = ()=>({
	type:ADD_ITEM
})
export const getDelteItem = (index)=>({
		type:DEL_ITEM,
		index:index
})
/*
export const getLoadItem = (data)=>({
	type:LOAD_ITEM,
	payload:data

})
*/


export const getLoadItem = ()=>{
	return (dispatch, getState)=>{
		axios.get('http://127.0.0.1:3000')
		.then((result)=>{
			//派发action
			dispatch({
				type:LOAD_ITEM,
				payload:result.data
			})
		})
		.catch((err)=>{
			console.log(err)
		})
	}
	
}
