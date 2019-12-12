

//设置用户名
export const saveUsername = (username)=>{
	window.localStorage.setItem('username',username)
}
//获取用户名
export const getUsername = ()=>{
	return window.localStorage.getItem('username')
}
//删除用户名
export const removeUsername = ()=>{
	return window.localStorage.removeItem('username')
}