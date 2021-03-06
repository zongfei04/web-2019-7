
import React,{Component,Fragment} from 'react'
import './App.css'
//import 'antd/dist/antd.css';
import Item from './Item.js'

import { DatePicker,Input,Button,Row,Col,List,Typography} from 'antd';
import store from './store/index.js'

//import {CHANGE_ITEM,DEL_ITEM,ADD_ITEM} from './store/actionTypes.js'

import {
	getChangeItem,
	getAddItem,
	getDelteItem,
	getLoadItem
} from './store/getActionItem.js'

import AppUI from './AppUI.js'

import axios from 'axios'


//容器组件
class App extends Component{
	constructor(props){
		super(props)

		this.handleInput = this.handleInput.bind(this)
		this.handleAdd = this.handleAdd.bind(this)
		this.handleDel = this.handleDel.bind(this)
		this.state = store.getState()
		store.subscribe(()=>{
			this.setState(store.getState()) 
		})
	}
	componentDidMount(){
		
		axios.get('http://127.0.0.1:3000')
		.then((result)=>{
			//派发action
			store.dispatch(getLoadItem(result.data))
		})
		.catch((err)=>{
			console.log(err)
		})
		
		//store.dispatch(getLoadItem())
	}
	handleAdd(){
		
		// const list = [...this.state.list,this.state.task]
		/*this.setState((preState)=>({
			list:list,
			task:''
		}))
		*/
		//派发action
		/*
		const action = {
			type:ADD_ITEM
		}
		*/
		store.dispatch(getAddItem())
	}
	handleInput(ev){
		const val = ev.target.value
		/*
		this.setState({
			task:ev.target.value
		})
		*/
		//派发action
		/*
		const action = {
			type:CHANGE_ITEM,
			payload:val
		}
		*/
		store.dispatch(getChangeItem(val))
		
		
	}
	handleDel(index){
		/*
		const list = [...this.state.list]
		list.splice(index,1)
		this.setState((preState)=>({
			list:list
		}))
		
		const action = {
			type:DEL_ITEM,
			index:index
		}*/
		store.dispatch(getDelteItem(index))
	}
	render(){
		return (
			<AppUI 
			  task={this.state.task}
			  list={this.state.list}
			  handleInput = {this.handleInput}
			  handleDel = {this.handleDel}
			  handleAdd = {this.handleAdd}

			/>
		)
	}
}
export default App
