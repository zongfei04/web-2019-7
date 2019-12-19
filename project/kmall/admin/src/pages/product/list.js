
import React,{Component} from 'react'
import axios from 'axios'
import { connect } from 'react-redux'
import './index.css'
import {Breadcrumb,Table,Button,Input,InputNumber,Switch } from 'antd'

import {actionCreator} from './store/index.js'

import Layout from 'commont/layout'

import moment from 'moment'

import { 
    Link,
} from "react-router-dom"

//容器组件
class ProductList extends Component{
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
		    width:'30%',
		    render:(name,record)=>{
		    	
		    	return (<Input 
		    		style={{width:'60%'}}
		    		defaultValue={name}
		    		onBlur={(ev)=>{
		    			if(ev.target.value != name){

		    				handleUpdataState(record._id,ev.target.value)
		    			}
		    		}}
		    	/>)
		    }
		  },
		  {
		    title: '手机分类名称',
		    dataIndex: 'mobileName',
		    key: 'mobileName',
		     render:(mobileName,record)=>{
		    	
		    	return (<Input 
		    		style={{width:'40%'}}
		    		defaultValue={mobileName}
		    		onBlur={(ev)=>{
		    			if(ev.target.value != mobileName){
		    				//console.log(record._id,ev.target.value)

		    				handleUpdataMobilename(record._id,ev.target.value)
		    			}
		    		}}
		    	/>)
		    }
		  },
		  {
		    title: '是否显示',
		    dataIndex: 'isShow',
		    key: 'isShow',
		     render:(isShow,record)=>{
		    	return (<Switch
		    		checkedChildren='显示'
		    		unCheckedChildren = '隐藏'
		    		defaultChecked={isShow =='0' ? false : true}
		    		onChange={(checked)=>{
		    			const isShow = checked ? '1' : '0'
		    			handleIsShow(record._id,isShow)
		    		}}
		
		    	/>)
		    }
		  },
		  {
		    title: '排序',
		    key: 'order',
		    dataIndex: 'order',
		     render:(order,record)=>{	    	
		    	return (<InputNumber 
		    		defaultValue={order}
		    		onBlur={(ev)=>{
		    			if(ev.target.value != order){
		    				//console.log(record._id,ev.target.value)

		    				handleUpdataOrdername(record._id,ev.target.value)
		    			}
		    		}}
		    	/>)
		    }
		  },
		];
		const {list,current,pageSize,total,handlePage,idFaceing,handleUpdataState,handleUpdataMobilename,handleUpdataOrdername,handleIsShow} = this.props
		const dataSource = list.toJS()
		return(
			<Layout>
				
				<div className="ProductList">
				     <Breadcrumb style={{ margin: '16px 0' }}>
			          <Breadcrumb.Item>首页</Breadcrumb.Item>
			          <Breadcrumb.Item>商品管理</Breadcrumb.Item>
			          <Breadcrumb.Item>商品列表</Breadcrumb.Item>
			        </Breadcrumb>
			        <div className="btn">
			        	 <Link to='/product/save'><Button type="primary" className="add-btn">新增商品</Button></Link>
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
		list:state.get('product').get('list'),
		current:state.get('product').get('current'),
		pageSize:state.get('product').get('pageSize'),
		total:state.get('product').get('total'),
		idFaceing:state.get('product').get('idFaceing')
	}
}
//将方法映射到组件
const mapDispatchToProps = (dispatch)=>{
	return {
		handlePage:(page)=>{
			dispatch(actionCreator.getPageAction(page))
		},
		//更新分类名称
		handleUpdataState:(id,name)=>{
			 dispatch(actionCreator.getUpdataState(id,name))
		},
		//更新手机分类名称
		handleUpdataMobilename:(id,mobileName)=>{
			 dispatch(actionCreator.getUpdataMobilename(id,mobileName))
		},
		//更新排序
		handleUpdataOrdername:(id,newOrder)=>{
			 dispatch(actionCreator.getUpdataOrdername(id,newOrder))
		},
		//是否显示的处理
		handleIsShow:(id,isShow)=>{
			dispatch(actionCreator.getIsShowAction(id,isShow))
		}
	}
}


export default connect(mapStateToProps,mapDispatchToProps)(ProductList)