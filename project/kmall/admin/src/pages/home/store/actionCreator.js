
import axios from 'axios'
import * as types from './actionTypes.js'






const getLoadInitAction = (data) =>({
	type:types.LOAD_DATA,
	payload:data
})

export const getCountAction = ()=>{
	return (dispatch,getState)=>{
		axios.get('http://127.0.0.1:3000/counts')
		.then(result=>{
			//派发action
			//dispatch(getLoadInitAction(result.data))
			console.log(result)
		})
		.catch(err=>{
			console.log(err)
		})
	}
}
