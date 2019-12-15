import React,{Component} from 'react'

import { Layout, Menu, Breadcrumb, Icon } from 'antd';

const { SubMenu } = Menu;
const { Content, Sider } = Layout;

import {NavLink} from "react-router-dom"

import './index.css'


class AdminSider extends Component{
	render(){
		return (
			<div className="AdminSider">
				<Sider width={200} style={{ background: '#fff' ,minHeight:600}}>
			        <Menu
			          style={{ height: '100%', borderRight: 0 }}
			        >
		            <Menu.Item key="1">
		            	<NavLink to=''>首页</NavLink>
		            </Menu.Item>
		            <Menu.Item key="2">
		            	<NavLink to='/user'>用户管理</NavLink>
		            </Menu.Item>
			        </Menu>
			      </Sider>
			</div>
		)
	}
}
export default AdminSider
