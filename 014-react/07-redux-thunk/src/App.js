
import React,{Component,Fragment} from 'react'
import './App.css'

import { DatePicker,Input,Button,Row,Col,List,Typography} from 'antd';
import store from './store/index.js'
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
		/*
		axios.get('http://127.0.0.1:3000')
		.then((result)=>{
			//派发action
			store.dispatch(getLoadItem(result.data))
		})
		.catch((err)=>{
			console.log(err)
		})
		*/
		
		store.dispatch(getLoadItem())
	}
	handleAdd(){
		store.dispatch(getAddItem())
	}
	handleInput(ev){
		const val = ev.target.value
		store.dispatch(getChangeItem(val))
		
		
	}
	handleDel(index){
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
