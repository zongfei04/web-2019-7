

var API_CONFIG = {
	login:                     ['/sessions/users','post'],
	getUsername:               ['/sessions/username','get'],
	getLogout:                 ['/sessions/users','delete'],
	register:                  ['/users','post'],
	checkUsername:             ['/users/checkUsername','get'],
	//获取个人中心信息
	getUserInfo:               ['/sessions/users','get']

}
module.exports = {
	API_CONFIG
}
