import {CHANGE_ITEM,ADD_ITEM,DEL_ITEM} from './actionTypes.js'

const defaultState = {
	list:['吃饭','睡觉','打豆豆','写代码'],
	task:''
}
/*reduxcer是一个纯函数(有固定的输入就有固定的输出)
reduxcer必须操作并返回newState,不能操作state，state有store管理,因为里面的数据由store共享
store通过newState改变自身state，getState方法获取的state数据是store中的state
*/

export default (state=defaultState,action)=>{
	if(action.type == CHANGE_ITEM){
		//错误写法
		//state.task = action.payload
		const newState = JSON.parse(JSON.stringify(state))
		newState.task = action.payload

		return newState
	}
	if(action.type == ADD_ITEM){
		const newState = JSON.parse(JSON.stringify(state))
		newState.list.push(newState.task)
		newState.task = ''


		return newState
	}
	if(action.type == DEL_ITEM){

		const newState = JSON.parse(JSON.stringify(state))
		newState.list.splice(action.index,1)

		return newState
	}
	return state

}