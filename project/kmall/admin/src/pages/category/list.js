
import React,{Component} from 'react'
import axios from 'axios'
import { connect } from 'react-redux'
import './index.css'
import {Breadcrumb,Table,Button} from 'antd'

import {actionCreator} from './store/index.js'

import Layout from 'commont/layout'

import moment from 'moment'

import { 
    Link,
} from "react-router-dom"

//容器组件
class CategoryList extends Component{
	constructor(props){
		super(props)
	}
	componentDidMount(){
		 this.props.handlePage(1)
	}
	render(){
		const columns = [
		  {
		    title: '分类名称',
		    dataIndex: 'name',
		    key: 'name',
		    render: text => <a>{text}</a>,
		  },
		  {
		    title: '手机分类名称',
		    dataIndex: 'mobileName',
		    key: 'mobileName',
		  },
		  {
		    title: '是否显示',
		    dataIndex: 'isShow',
		    key: 'isShow',
		  },
		  {
		    title: '排序',
		    key: 'order',
		    dataIndex: 'order'
		  },
		];
		const {list,current,pageSize,total,handlePage,idFaceing} = this.props
		// console.log(list)
		/*
		const dataSource = list.map((user)=>{
			return {
				key:user.get('_id'),
				name:user.get('name'),
				mobileName:user.get('mobileName'),
				isShow:user.get('isShow'),
				order:user.get('order'),
				//createdAt:moment(user.get('createdAt')).format('YYYY-MM-DD HH:mm:ss')
			}
		}).toJS()
		*/
		const dataSource = list.toJS()
		return(
			<Layout>
				
				<div className="CategoryList">
				     <Breadcrumb style={{ margin: '16px 0' }}>
			          <Breadcrumb.Item>首页</Breadcrumb.Item>
			          <Breadcrumb.Item>分类管理</Breadcrumb.Item>
			          <Breadcrumb.Item>分类列表</Breadcrumb.Item>
			        </Breadcrumb>
			        <div className="btn">
			        	 <Link to='/category/add'><Button type="primary" className="add-btn">新增列表</Button></Link>
			        </div>
					<Table 
						columns={columns} 
						dataSource={dataSource}
						pagination={{
							current:current,
							pageSize:pageSize,
							total:total
						}}
						onChange={(page)=>{
							handlePage(page.current)
						}}
						loading={{
							spinning:idFaceing,
							tip:'数据玩命加载中，请稍后'
						}}
					/>
				</div>
			</Layout>
		)
	}
}




//将属性映射到组件中
const mapStateToProps = (state)=>{
	return {
		list:state.get('category').get('list'),
		current:state.get('category').get('current'),
		pageSize:state.get('category').get('pageSize'),
		total:state.get('category').get('total'),
		idFaceing:state.get('category').get('idFaceing')
	}
}
//将方法映射到组件
const mapDispatchToProps = (dispatch)=>{
	return {
		handlePage:(page)=>{
			dispatch(actionCreator.getPageAction(page))
		}
	}
}


export default connect(mapStateToProps,mapDispatchToProps)(CategoryList)