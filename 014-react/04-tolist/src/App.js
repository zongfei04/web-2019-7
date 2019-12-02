
import React,{Component,Fragment} from 'react'
import './App.css'
import Item from './Item.js'

class App extends Component{
	constructor(props){
		//挂载时
		console.log('constructor')
		super(props)

		//初始化state
		this.state = {
			list:['吃饭','睡觉','打豆豆','写代码'],
			task:''
		}
		this.handleInput = this.handleInput.bind(this)
		this.handleAdd = this.handleAdd.bind(this)
	}
	//挂载时
	static getDerivedStateFromProps(props, state){
			console.log('getDerivedStateFromProps')
			return null
		}
	handleAdd(){
		const list = [...this.state.list,this.state.task]
		this.setState((preState)=>({
			list:list,
			task:''
		}),()=>{
			console.log(this.ul.childNodes)
		})
		

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
	getItems(){
		return this.state.list.map((item,index)=>{
					return (
						<Item 
							key={index} 
							task={item} 
							handleDel={this.handleDel.bind(this)}
						 />
					)

				})
	}
	render(){
		console.log('render')
		return (
			<div className="box">
				<input ref={(input)=>{this.input = input}} onChange={this.handleInput} value={this.state.task}/>
				<button className="btn" onClick={this.handleAdd}>提交</button>
				<ul className="list" ref={(ul)=>{this.ul = ul}}>
					{
						this.getItems()
					}
					
				</ul>
			</div>
		)

	}
}
export default App