
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
			level:3
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
//更新分类名称
export const getUpdataState = (id,newName)=>{
	return (dispatch,getState)=>{
		const page = getState().get('category').get('current')
		api.updateCategoryName({
			id:id,
			name:newName,
			page:page
		})
		.then(result=>{
			
			const data = result.data
			if(data.code == 0){
				//派发action获取后台的数据并存放咋store中
				message.success('更新分类成功')
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
//更新手机分类名称
export const getUpdataMobilename = (id,mobileName)=>{
	return (dispatch,getState)=>{
		const page = getState().get('category').get('current')
		api.updateMobilename({
			id:id,
			mobileName:mobileName,
			page:page
		})
		.then(result=>{
			
			const data = result.data
			if(data.code == 0){
				//派发action获取后台的数据并存放咋store中
				message.success('更新手机分类成功')
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
//更新排序
export const getUpdataOrdername = (id,newOrder)=>{
	return (dispatch,getState)=>{
		const page = getState().get('category').get('current')
		api.updateOrdername({
			id:id,
			order:newOrder,
			page:page
		})
		.then(result=>{
			
			const data = result.data
			if(data.code == 0){
				//派发action获取后台的数据并存放咋store中
				message.success('更新排序成功')
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

//处理是否显示
export const getIsShowAction = (id,isShow)=>{
	return (dispatch,getState)=>{
		const page = getState().get('category').get('current')
		api.categoryIsShow({
			id:id,
			isShow:isShow,
			page:page
		})
		.then(result=>{
			const data = result.data
			if(data.code == 0){
				//派发action获取后台的数据并存放咋store中	
				if(isShow == 1){
					message.success('显示分类成功')
				}
				else{
					message.success('隐藏分类成功')
				}
				
				message.success('显示成功')
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

