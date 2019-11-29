
import React,{Component,Fragment} from 'react'
import './App.css'

class App extends Component{
	constructor(props){
		super(props)
		//初始化state
		this.state = {
			list:['吃饭','睡觉','打豆豆','写代码'],
			task:''
		}
		
	}
	handleAdd(){
		const list = [...this.state.list,this.state.task]
		this.setState({
			list:list,
			task:''
		})
	}
	handleInput(ev){
		// console.log(ev.target.value)
		this.setState({
			task:ev.target.value
		})
		
	}
	handleDel(index){
		const list = [...this.state.list]
		list.splice(index,1)
		this.setState({
			list
		})

	}
	render(){
		/*不用显示多余的div
		return <Fragment>
			<input /><button>提交</button>
		</Fragment>
		*/
		return (
			<div className="box">
				<input onChange={this.handleInput.bind(this)} value={this.state.task}/>
				<button className="btn" onClick={this.handleAdd.bind(this)}>提交</button>
				<ul className="list">
					{
						/*
						<li>吃饭</li>
						<li>睡觉</li>
						<li>打豆豆</li>
						*/
						this.state.list.map((item,index)=>{
							return (
								<li onClick={this.handleDel.bind(this,index)} key={index}>{item}</li>
							)

						})
					}
					
				</ul>
			</div>
		)

	}
}
export default App