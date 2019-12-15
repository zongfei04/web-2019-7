

import React,{Component} from 'react'

import { Alert,Button  } from 'antd'

import './index.css'

import {Link} from "react-router-dom"

class Err extends Component{
	render(){
		return (
			<div className="err">
				<Alert
			      message="Not Found"
			      description="您输入的地址有误，请重新输入"
			      type="error"
			      showIcon
			    />
			    <Link to=''><Button type="link">返回首页</Button></Link>
			</div>
		)
	}
}
export default Err