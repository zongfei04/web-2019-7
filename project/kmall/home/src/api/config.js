

var API_CONFIG = {
	login:                     ['/sessions/users','post'],
	getUsername:               ['/sessions/username','get'],
	getLogout:                 ['/sessions/users','delete'],
	register:                  ['/users','post'],
	checkUsername:             ['/users/checkUsername','get'],
	//获取个人中心信息
	getUserInfo:               ['/sessions/users','get'],
	//验证密码，更新密码
	updateUsers:               ['users','put'],
	//加载首页分类数据
	getCategories:             ['/categories/homeCategories','get']

}
module.exports = {
	API_CONFIG
}
