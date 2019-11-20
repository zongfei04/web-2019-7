/*
	解释说明
	page:当前显示的页码
	modle:需要操作的文档
	query:需要查询的条件
	projection:隐藏的字段信息
	sort:排序


*/


async function pagination(options){
	let {page,modle,query,projection,sort} = options
	//获取用户信息渲染模板
	/*进行数据分页
		前提：想要进行分页必须知道页码，由前台page传入
		约定：每一页显示几条数据，limit = 2
	*/
	let limit = 2;

	if(isNaN(page)){
		page = 1
	}
	//上一边界控制
	if(page == 0){
		page = 1
	}
	//下一边界控制
	const count = await modle.countDocuments()
	const pages = Math.ceil(count/limit)
		if(page > pages){
			page = pages
		}
		if(page == 0){
			page = 1
		}
		//由于swig无法对数字进行遍历循环，因此需要在后台生成页码

		let list = []
		for(let i = 1;i<=pages;i++){
			list.push(i)
		}
		let skip = (page - 1)*limit
		const docs = await modle.find(query,projection).sort(sort).skip(skip).limit(limit)
		return {
			docs:docs,
			page:page,
			list:list,
			pages:pages
		}

}
module.exports = pagination