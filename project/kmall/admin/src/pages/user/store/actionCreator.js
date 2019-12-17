
import axios from 'axios'
import * as types from './actionTypes.js'

import api from 'api'

const getpageStartItem = (payload)=>({
    type:types.PAGE_START_ITEM
})
const getPageDoneItem = (payload)=>({
    type:types.PAGE_DONE_ITEM
})


const setPageAction = (payload) =>({
	type:types.SET_PAGE,
	payload
})



export const getPageAction = (page)=>{
	return (dispatch,getState)=>{
		//发送请求前显示loading
        dispatch(getpageStartItem())
		api.getPageList({
			page:page
		})
		.then(result=>{
			console.log(result)
			
			const data = result.data
			if(data.code == 0){
				//派发action获取后台的数据并存放咋store中
				dispatch(setPageAction(data.data))
			}
			

		})
		.catch(err=>{
			console.log(err)
		})
		.finally(()=>{
            dispatch(getPageDoneItem())
        })
	}
}
