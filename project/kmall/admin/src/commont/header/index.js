import React,{Component} from 'react'

import { Layout, Menu, Breadcrumb, Icon,Dropdown } from 'antd';

const { SubMenu } = Menu;
const { Header, Content, Sider } = Layout;

import './index.css'

import {getUsername,removeUsername} from 'util'

import axios from 'axios'

import api from 'api'

class AdminHeader extends Component{
	constructor(props){
		super(props)
		this.handleLogot = this.handleLogot.bind(this)
	}
	handleLogot(){
		api.logout()
		.then(result=>{
            if(result.data.code == 0){
                //1清除前台的localStorge
                removeUsername()
                //2.返回到后台首页
                 window.location.href = '/'
            }
        })
        .catch(err=>{
            console.log(err)
        })
		//向后台请求清除seesion
		/*
		 axios({
            method:'delete',
            url:'http://127.0.0.1:3000/sessions/users'
        })
        .then(result=>{
            if(result.data.code == 0){
                //1清除前台的localStorge
                removeUsername()
                //2.返回到后台首页
                 window.location.href = '/'
            }
        })
        .catch(err=>{
            console.log(err)
        })
        */
	}
	render(){
		const menu = (
		  <Menu>
		    <Menu.Item key="0" onClick={this.handleLogot}>
		    	<Icon type="logout" />退出
		    </Menu.Item>
		  </Menu>
		);
		return (
			<div className="AdminHeader">
				<Header className="header">
				  <div className="logo">
			      	KMALL 后台管理系统
			      </div>
			      <Dropdown overlay={menu} trigger={['click']} className="drop-down">
				    <a className="ant-dropdown-link" href="#">
				       {getUsername()}<Icon type="down" />
				    </a>
				  </Dropdown>
			    </Header>
			</div>
		)
	}
}
export default AdminHeader
