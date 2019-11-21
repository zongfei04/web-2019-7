
;(function($){
 ClassicEditor
    .create( document.querySelector( '#content' ), {
    	language:'zh-cn',
    	ckfinder:{
			uploadUrl:'/article/uploadImg'
		}
    } )
    .catch( error => {
        console.log( error );
    } );
})(jQuery);