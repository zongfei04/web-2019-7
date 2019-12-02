
import React,{Component,Fragment} from 'react'
import './App.css'
//import 'antd/dist/antd.css';
import Item from './Item.js'

import { DatePicker,Input,Button,Row,Col,List,Typography} from 'antd';
import store from './store/index.js'

class App extends Component{
	constructor(props){
		super(props)

		this.handleInput = this.handleInput.bind(this)
		this.handleAdd = this.handleAdd.bind(this)
		this.state = store.getState()
		console.log(store.getState())
	}
	handleAdd(){
		const list = [...this.state.list,this.state.task]
		this.setState((preState)=>({
			list:list,
			task:''
		}))
	}
	handleInput(ev){
		this.setState({
			task:ev.target.value
		})
	}
	handleDel(index){
		const list = [...this.state.list]
		list.splice(index,1)
		this.setState((preState)=>({
			list:list
		}))
	}
	render(){
		return (
			<div className="box">
				<Row>
					<Col span={20}>
						<Input 
							onChange={this.handleInput}
							value = {this.state.task}
						/>
					</Col>
					<Col span={4}>
						<Button type="primary" onClick={this.handleAdd}>提交</Button>
					</Col>
				</Row>
				<Row>
					<Col span={22}>
						<List
						    style={{marginTop:15}}
						      bordered
						      dataSource={this.state.list}
						      renderItem={(item,index) => (
						        <List.Item onClick={this.handleDel.bind(this,index)}>
						           {item}
						        </List.Item>
						      )}
						/>
					</Col>
				</Row>
				<DatePicker />
			</div>
		)
	}
}
export default App



/*
	//安装antd
	npm install antd --save
	//按需加载
	npm install --save-dev babel-plugin-import
*/