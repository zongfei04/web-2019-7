import React,{Component,Fragment} from 'react'
import './index.css'

import { DatePicker,Input,Button,Row,Col,List,Typography} from 'antd';
//import store from '../../store/index.js'
import {
	getChangeItem,
	getAddItem,
	getDelteItem,
	getLoadItem

} from '../../store/getActionItem.js'

import axios from 'axios'

import { connect } from 'react-redux'

//容器组件

class TodoList extends Component{
	/*
	componentDidMount(){
		this.props.handleInit()
	}
	*/
	render(){
		return (
			<div className="box">
				<Row>
					<Col span={20}>
						<Input 
							onChange={this.props.handleInput}
							value = {this.props.task}
						/>
					</Col>
					<Col span={4}>
						<Button type="primary" onClick={this.props.handleAdd}>提交</Button>
					</Col>
				</Row>
				<Row>
					<Col span={22}>
						<List
						    style={{marginTop:15}}
						      bordered
						      dataSource={this.props.list}
						      renderItem={(item,index) => (
						        <List.Item onClick={()=>{this.props.handleDel(index)}}>
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

//属性映射
const mapStateToProps = (state)=>{
	return {
		list:state.list,
		task:state.task
	}

}
//方法映射
const mapDispatchToProps = (dispatch)=>{
	return{
		handleInput:(ev)=>{
			const val = ev.target.value
			dispatch(getChangeItem(val))
		},
		handleAdd:()=>{
			dispatch(getAddItem())
		},
		handleDel:(index)=>{
			dispatch(getDelteItem(index))
		},
		handleInit:()=>{
			dispatch(getLoadItem())
		}
	}
}


export default connect(mapStateToProps,mapDispatchToProps)(TodoList)
