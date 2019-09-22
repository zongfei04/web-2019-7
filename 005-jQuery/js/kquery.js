;(function(w){
	var kquery = function(){
		return new kquery.fn.init();
	}

	kquery.fn = kquery.prototype = {
		constructor:kquery,
		init:function(){

		},
		test:function(){
			console.log('test...')
		}
	}
	kquery.fn.init.prototype = kquery.prototype;
	w.$ = w.kquery = kquery;
})(window)