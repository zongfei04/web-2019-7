//根据不同的视口宽度设置根元素大小

;(function(win,doc){
	//1.获取根元素
	var oRoot = doc.getElementsByTagName('html')[0];
	
	function refresh(){
		//2.获取视口宽度
		var width = doc.body.clientWidth || doc.documentElement.clientWidth;
		//3按照一定比例设置根元素大小
		var oFsize = width / 10;
		oRoot.style.fontSize = oFsize + 'px';
	}
	win.addEventListener('DOMContentLoaded',refresh,false);
	win.addEventListener('Load',refresh,false);
	win.addEventListener('resize',refresh,false);

})(window,document)