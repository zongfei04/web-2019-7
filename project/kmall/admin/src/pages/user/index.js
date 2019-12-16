
import React,{Component} from 'react'
import axios from 'axios'
import { connect } from 'react-redux'
import './index.css'
import {Breadcrumb,Table} from 'antd'

import {actionCreator} from './store/index.js'

import Layout from 'commont/layout'

import moment from 'moment'


//容器组件
class User extends Component{
	constructor(props){
		super(props)
	}
	componentDidMount(){
		this.props.handlePage()
	}
	render(){
		const columns = [
		  {
		    title: '用户名',
		    dataIndex: 'username',
		    key: 'username',
		    render: text => <a>{text}</a>,
		  },
		  {
		    title: '是否是管理员',
		    dataIndex: 'isAdmin',
		    key: 'isAdmin',
		    render:(isAdmin)=>(isAdmin ? '是' : '否')
		  },
		  {
		    title: 'email',
		    dataIndex: 'email',
		    key: 'email',
		  },
		  {
		    title: '电话',
		    key: 'phone',
		    dataIndex: 'phone'
		  },
		  {
		    title: '创建时间',
		    dataIndex:'createdAt',
		    key: 'createdAt'	    
		  },
		];
		const {list,current,pageSize,total,handlePage,idFaceing} = this.props
		// console.log(list)
		const dataSource = list.map((user)=>{
			return {
				key:user.get('_id'),
				username:user.get('username'),
				isAdmin:user.get('isAdmin'),
				email:user.get('email'),
				phone:user.get('phone'),
				createdAt:moment(user.get('createdAt')).format('YYYY-MM-DD HH:mm:ss')
			}
		}).toJS()
		return(
			<Layout>
				 <Breadcrumb style={{ margin: '16px 0' }}>
		          <Breadcrumb.Item>首页</Breadcrumb.Item>
		          <Breadcrumb.Item>用户管理</Breadcrumb.Item>
		        </Breadcrumb>
				<div className="User">
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
		list:state.get('user').get('list'),
		current:state.get('user').get('current'),
		pageSize:state.get('user').get('pageSize'),
		total:state.get('user').get('total'),
		idFaceing:state.get('user').get('idFaceing')
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


export default connect(mapStateToProps,mapDispatchToProps)(User)