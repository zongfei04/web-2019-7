
import React,{Component,Fragment} from 'react'
import './App.css'
//import 'antd/dist/antd.css';
import Item from './Item.js'

import { DatePicker,Input,Button,Row,Col,List,Typography} from 'antd';
import store from './store/index.js'

class App extends Component{
	constructor(props){
		super(props)

		//初始化state
		/*
		this.state = {
			list:['吃饭','睡觉','打豆豆','写代码'],
			task:''
		}
		*/
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
	/*
	getItems(){
		return this.state.list.map((item,index)=>{
					return (
						<Item 
							key={index} 
							task={item} 
							handleDel={this.handleDel.bind(this,index)}
						 />
					)

				})
	}
	*/
	render(){
		return (
			<div className="box">
				{
				//<input ref={(input)=>{this.input = input}} onChange={this.handleInput} value={this.state.task}/>
				}
				<Row>
					<Col span={20}>
						<Input 
							onChange={this.handleInput}
							value = {this.state.task}
						/>
					</Col>
					<Col span={4}>
						{
							//<button className="btn" onClick={this.handleAdd}>提交</button>
						}
						<Button type="primary" onClick={this.handleAdd}>提交</Button>
					</Col>
				</Row>
				{/*
					<ul className="list" ref={(ul)=>{this.ul = ul}}>
						{
							this.getItems()
						}	
					</ul>
				*/}
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