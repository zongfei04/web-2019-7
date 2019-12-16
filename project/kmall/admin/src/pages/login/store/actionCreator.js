
import axios from 'axios'

import * as types  from './actionTypes.js'

import {message} from 'antd'

import {saveUsername} from 'util'

import api from 'api'

const getLoginStartItem = (payload)=>({
    type:types.LOGIN_START_ITEM
})
const getLoginDoneItem = (payload)=>({
    type:types.LOGIN_DONE_ITEM
})

export const getLoginItem = (values)=>{
    return (dispatch,getState)=>{
        //发送请求前显示loading
        dispatch(getLoginStartItem())
        values.role = 'admin'
        api.login(values)
        .then(result=>{
            console.log(result)
            const data = result.data
            if(data.code == 0){
                //登录成功
                //1.将用户信息保存在前台
                saveUsername(data.data.username) 
                //2.返回到后台首页
                 window.location.href = '/'
                
            }
            else{//登录失败
                message.error(data.message)
            }
        })
        .catch(err=>{
            message.error('请求失败，请稍后再试')
        })
        .finally(()=>{
            dispatch(getLoginDoneItem())
        })
        /*
        axios({
            method:'post',
            url:'http://127.0.0.1:3000/sessions/users',
            withCredentials:true,
            data:values
        })
        .then(result=>{
            console.log(result)
            const data = result.data
            if(data.code == 0){
                //登录成功
                //1.将用户信息保存在前台
                saveUsername(data.data.username) 
                //2.返回到后台首页
                 window.location.href = '/'
                
            }
            else{//登录失败
                message.error(data.message)
            }
        })
        .catch(err=>{
            message.error('请求失败，请稍后再试')
        })
        .finally(()=>{
            dispatch(getLoginDoneItem())
        })
        */  
              
    }
}



