
import React, { Component } from 'react'

import Layout from 'commont/layout'

import {Form, Select, Input, Button,Breadcrumb,InputNumber} from 'antd'

const { Option } = Select;

import './index.css'
import { connect } from 'react-redux'

import {actionCreator} from './store/index.js'

import UploadImage from 'commont/upload-image'

import {UPLOAD_PRODUC_IMAGE} from 'api/config.js'

import RichEditor from 'commont/rich-editor'

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
		return (
			<div className="ProductSave">
				<Layout>
					<Breadcrumb style={{ margin: '16px 0' }}>
			            <Breadcrumb.Item>首页</Breadcrumb.Item>
			            <Breadcrumb.Item>商品管理</Breadcrumb.Item>
			            <Breadcrumb.Item>编辑商品</Breadcrumb.Item>
		            </Breadcrumb>
		            <div className="content">
		            	<Form labelCol={{ span: 5 }} wrapperCol={{ span: 12 }} >
				        <Form.Item label="商品分类">
				          {getFieldDecorator('category', {
				            rules: [{ required: true, message: '请输入商品分类名称' }],
				          })(
				            <Select
				              placeholder="请输入商品分类名称"
				            >
				              {
				              	categories.map((category)=>{
				              		return <Option key={category.get('_id')}>{category.get('name')}</Option>
				              	})
				              }
				            </Select>,
				          )}
				        </Form.Item>
				        <Form.Item label="商品名称">
				          {getFieldDecorator('name', {
				            rules: [{ required: true, message: '请输入商品名称' }],
				          })(<Input />)}
				        </Form.Item>
				        <Form.Item label="商品描述">
				          {getFieldDecorator('description', {
				            rules: [{ required:true, message: '请输入商品描述' }],
				          })(<Input />)}
				        </Form.Item>
				        <Form.Item label="商品价格">
				          {getFieldDecorator('price', {
				            rules: [{ required:true, message: '请输入商品价格' }],
				          })(<InputNumber min={0} />)}
				        </Form.Item>
				        <Form.Item label="商品库存">
				          {getFieldDecorator('stock', {
				            rules: [{ required:true, message: '请输入商品库存' }],
				          })(<InputNumber min={0} />)}
				        </Form.Item>
				        <Form.Item label="封面图片">
				         	<UploadImage
				         	 max={1} 
				         	 action={UPLOAD_PRODUC_IMAGE}
				         	 getFileList={(fileList)=>{
				   				console.log(fileList)
				         	 }}
				         	/>
				        </Form.Item>
				        <Form.Item label="商品图片">
					        <UploadImage
					         	 max={5} 
					         	 action={UPLOAD_PRODUC_IMAGE}
					         	 getFileList={(fileList)=>{
					   				console.log(fileList)
					         	 }}
					        />
				        </Form.Item>
				        <Form.Item label="商品详情">
				         <RichEditor />
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



