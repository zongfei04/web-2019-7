


export const SERVER = 'http://127.0.0.1:3000'
export const UPLOAD_PRODUC_IMAGE = SERVER +'/products/images'
export const UPLOAD_AD_IMAGE = SERVER + '/ads/image'
export const API_CONFIG = {
	login:                     ['/sessions/users','post'],
	logout:                    ['/sessions/users','delete'],
	//求出home首页
	getCount:                  ['/counts','get'],
	//获取用户管理列表数据
	getPageList:               ['/users/list','get'],
	//获取新增分类数据
	getAddCategory:            ['/categories','post'],
	//处理新增父级分类
	getLevelCategory:          ['/categories/levelCategories','get'],
	//获取分类分页数据
	getCategoryList:           ['/categories/list','get'],
	//更新分类名称
	updateCategoryName:        ['/categories/name','put'],
	//更新手机分类名称
	updateMobilename:          ['/categories/mobileName','put'],
	//更新排序
	updateOrdername:           ['/categories/order','put'],
	//是否显示处理
	categoryIsShow:            ['/categories/isShow','put'],
	//广告api
	getAdsList:                  	["/ads/list","get"],
    getAdsDetail:                	["/ads/detail","get"],
    addAds:                      	["/ads","post"],
    updateAds:                  	["/ads","put"],
    updateAdsOrder:              	["/ads/order","put"],
    updateAdsIsShow:             	["/ads/isShow","put"],
}