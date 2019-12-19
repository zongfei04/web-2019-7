
import React, { Component } from 'react'

import Layout from 'commont/layout'

import {Form, Select, Input, Button,Breadcrumb} from 'antd'

const { Option } = Select;

import './index.css'
import { connect } from 'react-redux'

import {actionCreator} from './store/index.js'

class ProductSave extends Component{
	constructor(props){
		super(props)
		this.handleSubmit = this.handleSubmit.bind(this)
	}
	handleSubmit(e){
	    e.preventDefault();
	    this.props.form.validateFields((err, values) => {
		    if (!err) {
		       // console.log('Received values of form: ', values);
		       this.props.handleAdd(values)
		    }
	    });
	}
	componentDidMount(){
		//处理新增父级分类
		this.props.handleLevelCategories()
	}
	render(){
		const { getFieldDecorator } = this.props.form;
		const {categories} = this.props
		console.log(categories)
		return (
			<div className="ProductSave">
				<Layout>
					<Breadcrumb style={{ margin: '16px 0' }}>
			            <Breadcrumb.Item>首页</Breadcrumb.Item>
			            <Breadcrumb.Item>分类管理</Breadcrumb.Item>
			            <Breadcrumb.Item>新增分类</Breadcrumb.Item>
		            </Breadcrumb>
		            <div className="content">
		            	<Form labelCol={{ span: 5 }} wrapperCol={{ span: 12 }} >
				        <Form.Item label="父级分类">
				          {getFieldDecorator('pid', {
				            rules: [{ required: true, message: '请输入父级分类名称' }],
				          })(
				            <Select
				              placeholder="请输入父级分类名称"
				            >
				              <Option value="0">根分类</Option>
				              {
				              	categories.map((category)=>{
				              		return <Option key={category.get('_id')}>{category.get('name')}</Option>
				              	})
				              }
				            </Select>,
				          )}
				        </Form.Item>
				        <Form.Item label="分类名称">
				          {getFieldDecorator('name', {
				            rules: [{ required: true, message: '请输入分类名称' }],
				          })(<Input />)}
				        </Form.Item>
				        <Form.Item label="手机分类名称">
				          {getFieldDecorator('mobileName', {
				            rules: [{ required:true, message: '请输入手机分类名称' }],
				          })(<Input />)}
				        </Form.Item>
				        <Form.Item wrapperCol={{ span: 12, offset: 5 }}>
				          <Button type="primary" onClick={this.handleSubmit}>
				            提交
				          </Button>
				        </Form.Item>
				      </Form>
		            </div>
				</Layout>
			</div>
		)
	}
}

//将属性映射到组件中
const mapStateToProps = (state)=>{
	return {
		categories:state.get('category').get('categories')
	}
}
//将方法映射到组件
const mapDispatchToProps = (dispatch)=>{
	return {
		handleAdd:(values)=>{
			dispatch(actionCreator.getAddCategoryAction(values))
		},
		handleLevelCategories:()=>{
			dispatch(actionCreator.getLevelCategoriesAction())
		}
	}
}

const WrappedProductSave = Form.create({ name: 'coordinated' })(ProductSave);


export default connect(mapStateToProps,mapDispatchToProps)(WrappedProductSave)



