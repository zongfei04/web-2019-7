/*
* @Author: Chen
* @Date:   2019-12-03 17:36:42
* @Last Modified by:   Chen
* @Last Modified time: 2019-12-06 15:11:45
*/
import React,{Component} from 'react'
import axios from 'axios'
import { connect } from 'react-redux'
import './index.css'
import { Input,Button,Row,Col,List   } from 'antd'

import {actionCreator} from './store/index.js'


//容器组件
class Home extends Component{
	componentDidMount(){
		//发送ajax
		// this.props.handleInit()
	}
	render(){
		const { list,task,handleInput,handelAdd,handleDel }= this.props
		return(
			<div className='Home'>
				<Row>
					<Col span={18}>
						<Input 
							onChange={handleInput}
							value={task}
						/>
					</Col>
					<Col span={6}>
						<Button 
							type="primary"
							onClick={handelAdd}
						>
							提交
						</Button>
					</Col>
				</Row>
				<List
					style={{marginTop:15}}
			      	bordered
			      	dataSource={list}
			      	renderItem={(item,index) => (
				        <List.Item onClick={()=>{handleDel(index)}}>
				          {item}
				        </List.Item>
			      	)}
			    />
			</div>	
		)
	}
}




//将属性映射到组件中
const mapStateToProps = (state)=>{
	return {
		
	}
}
//将方法映射到组件
const mapDispatchToProps = (dispatch)=>{
	return {
		
	}
}


export default connect(mapStateToProps,mapDispatchToProps)(Home)