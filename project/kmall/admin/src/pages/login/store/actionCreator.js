
import axios from 'axios'

import * as types  from './actionTypes.js'


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
        })
        .catch(err=>{
            console.log(err)
        })        
    }
}



