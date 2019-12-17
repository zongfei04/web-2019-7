
import axios from 'axios'
import * as types from './actionTypes.js'

import api from 'api'

import {message} from 'antd'

//处理新增分类
export const getAddCategoryAction = (values)=>{
	return (dispatch,getState)=>{
		api.getAddCategory(values)
		.then(result=>{
			console.log(result)
			
			const data = result.data
			if(data.code == 0){
				//派发action获取后台的数据并存放咋store中
				dispatch(setLevleAction(data.data))
				message.success('新增分类成功')

			}

		})
		.catch(err=>{
			message.error(data.message)
		})
	}
}

const setLevleAction = (payload) =>({
	type:types.SET_LEVEL_ACTION,
	payload
})

//处理新增父级分类
export const getLevelCategoriesAction = ()=>{
	return (dispatch,getState)=>{
		api.getLevelCategory({
			level:2
		})
		.then(result=>{
			const data = result.data
			if(data.code == 0){
				//派发action获取后台的数据并存放咋store中
				dispatch(setLevleAction(data.data))
			}
			else{
				message.error('请求失败，请稍后再试')
			}

		})
		.catch(err=>{
			console.log(err)
		})
	}
}
//处理分类列表分页数据
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
		api.getCategoryList({
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
