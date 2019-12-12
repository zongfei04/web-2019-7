import React, { Component } from 'react'
import { connect } from 'react-redux'

import { Form, Icon, Input, Button, Checkbox } from 'antd';

import "./index.css"
import { actionCreator } from './store'

//容器组件
class NormalLoginForm extends Component {
    constructor(props){
        super(props)
        this.handleSubmit = this.handleSubmit.bind(this)
    }
    handleSubmit(e){
        e.preventDefault();
        this.props.form.validateFields((err, values) => {
            if (!err) {

                this.props.handleLogin(values)
            }
        })
    }
    render() {
        const { getFieldDecorator } = this.props.form;
        return (
        <div className="login">
            <Form className="login-form">
                <Form.Item>
                  {getFieldDecorator('username', {
                    rules: [{ required: true, message: '请输入用户名' },{pattern:/^[a-z][0-9a-z_]{2,5}$/i,message:'请输入以字母开头的3-6位字符'}],
                  })(
                    <Input
                      prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)'}} />}
                      placeholder="用户名"
                    />,
                  )}
                </Form.Item>
                <Form.Item>
                  {getFieldDecorator('password', {
                    rules: [{ required: true, message: '请输入密码' },{pattern:/^\w{3,6}$/i,message:'请输入3-6位字符'}],
                  })(
                    <Input
                      prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />}
                      type="password"
                      placeholder="密码"
                    />,
                  )}
                </Form.Item>
                <Form.Item>
                  <Button 
                  type="primary" 
                  className="login-form-button btn-submit"
                  onClick={this.handleSubmit}
                  loading={false}
                  >
                    提交
                  </Button>
                 
                </Form.Item>
            </Form>
        </div>
        );
    }
}
const WrappedNormalLoginForm = Form.create({ name: 'normal_login' })(NormalLoginForm);


//映射属性到组件
const mapStateToProps = (state)=>({
      idFaceing:state.get('login')
})
//映射方法到组件
const mapDispatchToProps = (dispatch)=>({
    handleLogin:(values)=>{
        dispatch(actionCreator.getLoginItem(values))
    }
})

export default connect(mapStateToProps,mapDispatchToProps)(WrappedNormalLoginForm)