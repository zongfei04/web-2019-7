import React,{Component,Fragment} from 'react'
import './index.css'

import { DatePicker,Input,Button,Row,Col,List,Typography} from 'antd';
import {getActionItem} from './store/index.js'

import axios from 'axios'

import { connect } from 'react-redux'

//容器组件

class TodoList extends Component{
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
		list:state.get('todolist').get('list'),
		task:state.get('todolist').get('task')

	}
	console.log(list)

}
//方法映射
const mapDispatchToProps = (dispatch)=>{
	return{
		handleInput:(ev)=>{
			const val = ev.target.value
			dispatch(getActionItem.getChangeItem(val))
		},
		handleAdd:()=>{
			dispatch(getActionItem.getAddItem())
		},
		handleDel:(index)=>{
			dispatch(getActionItem.getDelteItem(index))
		},
		handleInit:()=>{
			dispatch(getActionItem.getLoadItem())
		}
	}
}


export default connect(mapStateToProps,mapDispatchToProps)(TodoList)
