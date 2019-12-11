
import axios from 'axios'

import * as types  from './actionTypes.js'

import {message} from 'antd'


const getLoadInitDataAction = (payload)=>({
    type:types.LOAD_DATA,
    payload
})

export const getLoginItem = (values)=>{
    return (dispatch,getState)=>{
        values.role = 'admin'
        axios({
            method:'post',
            url:'http://127.0.0.1:3000/sessions/users',
            data:values
        })
        .then(result=>{
            console.log(result)
            const data = result.data
            if(data.code == 0){
                //登录成功
                //1.将用户信息保存在前台
                //2.返回到后台首页
                
            }
            else{//登录失败
                message.error(data.message)
            }
        })
        .catch(err=>{
            message.error('请求失败，请稍后再试')
        })        
    }
}



