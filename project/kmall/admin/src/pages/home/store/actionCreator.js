
import axios from 'axios'
import * as types from './actionTypes.js'

const setCountAction = (payload) =>({
	type:types.SET_COUNT,
	payload
})

export const getCountAction = ()=>{
	return (dispatch,getState)=>{
		axios({
            method:'get',
            url:'http://127.0.0.1:3000/counts',
            withCredentials:true
        })
		.then(result=>{

			const data = result.data
			if(data.code == 0){
				//派发action获取后台的数据并存放咋store中
				console.log(result)
				dispatch(setCountAction(data.data))
			}

		})
		.catch(err=>{
			console.log(err)
		})
	}
}
