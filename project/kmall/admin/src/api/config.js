


export const SERVER = 'http://127.0.0.1:3000'
export const API_CONFIG = {
	login:        ['/sessions/users','post'],
	logout:       ['/sessions/users','delete'],
	//求出home首页
	getCount:     ['/counts','get'],
	//获取用户管理列表数据
	getPageList:  ['/users/list','get']
}