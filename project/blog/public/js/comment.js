;(function($){
	//登录注册面版切换
	$login = $('#login')
	$register = $('#register')
	$userInfo = $('#user-info')
	//登录->注册
	$('#go-register').on('click',function(){
		$login.hide()
		$register.show()
	})
	//注册->登录
	$('#go-login').on('click',function(){
		$login.show()
		$register.hide()
	})
	//2.用户注册页面
	//点击注册，发送请求
	$('#sub-register').on('click',function(){
		//2.1获取注册信息
		var username = $('#register').find('[name=username]').val()
		var password = $('#register').find('[name=password]').val()
		var repassword = $('#register').find('[name="repassword"]').val()
		var textDanger = $('#register').find('.text-danger')

		//2.2验证注册信息
		//验证用户名信息 用户名信息要是以字母开头，内容为下划线，字母和数字在3到10位以内
		reguser = /^[a-zA-Z][a-zA-Z0-9_]{2,9}$/
		//验证密码信息，密码必须是以字母开头的3-10位字符
		regpass = /^\w{3,6}$/
		errMsg = ''
		if(!reguser.test(username)){
			errMsg = '用户名信息要以字母开头，在3到10位之间'
		}//验证密码
		else if(!regpass.test(password)){
			errMsg = '密码必须是以字母开头的3-10位字符'
		}//验证输入密码
		else if(repassword != password){
			errMsg = '两次密码信息输入不一致'
		}//确认通过
		else{
			errMsg = ''
		}
		//如果有错误，显示错误
		if(errMsg){
			textDanger.html(errMsg)
		}
		else{//没有错误，发送ajax
			textDanger.html('')
			//2.3如果合法，发送ajax
			$.ajax({
				url:'/user/register',
				type:'POST',
				datatype:'json',
				data:{
					username:username,
					password:password
				}
			})
			.done(function(data){
				 if(data.code == 0){//注册成功
				 	//返回登录面版
				 	$('#go-login').trigger('click')
				 }
				 else{
				 	textDanger.html(data.message)
				 }
			})
			.fail(function(err){
				 textDanger.html('请求失败，请稍后再试')
			})
		}		
	})
	//2.用户登录页面
	$('#sub-login').on('click',function(){
		//2.1获取注册信息
		var username = $('#login').find('[name=username]').val()
		var password = $('#login').find('[name=password]').val()
		var textDanger = $('#login').find('.text-danger')

		//2.2验证注册信息
		//验证用户名信息 用户名信息要是以字母开头，内容为下划线，字母和数字在3到10位以内
		reguser = /^[a-zA-Z][a-zA-Z0-9_]{2,9}$/
		//验证密码信息，密码必须是以字母开头的3-10位字符
		regpass = /^\w{3,6}$/
		errMsg = ''
		if(!reguser.test(username)){
			errMsg = '用户名信息要以字母开头，在3到10位之间'
		}//验证密码
		else if(!regpass.test(password)){
			errMsg = '密码必须是以字母开头的3-10位字符'
		}//确认通过
		else{
			errMsg = ''
		}
		//如果有错误，显示错误
		if(errMsg){
			textDanger.html(errMsg)
		}
		else{//没有错误，发送ajax
			textDanger.html('')
			//2.3如果合法，发送ajax
			$.ajax({
				url:'/user/login',
				type:'POST',
				datatype:'json',
				data:{
					username:username,
					password:password
				}
			})
			.done(function(data){
				 if(data.code == 0){
				 	/*
				 	$userInfo.show()
				 	$login.hide()
				 	$userInfo.find('span').html(data.user.username)
				 	*/
				 	window.location.reload()
				 }
				 else{
				 	 textDanger.html(data.message)
				 }
			})
			.fail(function(err){
				 textDanger.html('请求失败，请稍后再试')
			})
		}		
	})
	//3.设置退出
	/*$('#logout').on('click',function(){
		$.ajax({
			url:'/user/logout',
			type:'GET'
		})
		.done(function(data){
			if(data.code == 0){
				window.location.href = '/'
			}
		})
		.fail(function(err){
			$userInfo.find('.err').html('请求失败，请稍后再试')
		})
	})*/
	
	//定义分页逻辑
	$articlePage = $('#article-page')
	
	$articlePage.on('get-data',function(ev,data){
		//文章分页函数
		function buildArticleHtml(articles){
			var html = ''

			articles.forEach(function(article){
				var createTime = moment(article.createAt).format('YYYY-MM-DD HH:mm:ss')
				html +=`
					 <div class="panel panel-default content-item">
			          <div class="panel-heading">
			            <h3 class="panel-title">
			              <a href="/detail/${article._id.toString()}" class="link" target="_blank">${article.title}</a>
			            </h3>
			          </div>
			          <div class="panel-body">
			            ${article.intro}
			          </div>
			          <div class="panel-footer">
			            <span class="glyphicon glyphicon-user"></span>
			            <span class="panel-footer-text text-muted">${article.author.username}</span>
			            <span class="glyphicon glyphicon-th-list"></span>
			            <span class="panel-footer-text text-muted">${article.category.name}</span>
			            <span class="glyphicon glyphicon-time"></span>
			            <span class="panel-footer-text text-muted">${createTime}</span>
			            <span class="glyphicon glyphicon-eye-open"></span>
			            <span class="panel-footer-text text-muted"><em>${article.click}</em>已阅读</span>
			          </div>
			        </div>`

				
			})
			return html
		}
		//分页器函数
		function buildPagination(list,page,pages){
			var html = ''
			if(page == 1){
				html+=`<li class="disabled">`
			}
			else{
				html+=`<li>`
			}
			html+=`<a href="javascript:;" aria-label="Previous">
		        <span aria-hidden="true">&laquo;</span>
		      </a>
		    </li>`
		    list.forEach(function(i){
		    	if(i == page){
		    		html+=`<li class="active"><a href="javascript:;">${i}</a></li>`
		    	}
		    	else{
		    		html+=`<li><a href="javascript:;">${i}</a></li>`
		    	}	
		    })
		    if(page == pages){
		    	html+=`<li class="disabled">`
		    }
		    else{
		    	html+=`<li>`
		    }
		    html+=` <a href="javascript:;" aria-label="Next">
		        <span aria-hidden="true">&raquo;</span>
		      </a>
		    </li>`
		    
			return html
		}
		//获取首页文章分页
		//构建文章列表结构
		$('#article-wrap').html(buildArticleHtml(data.docs))
		//构建分页器结构
		$pagination = $articlePage.find('.pagination')
		if(data.pages>1){
			$pagination.html(buildPagination(data.list,data.page,data.pages))
		}
		else{
			$pagination.html('')
		}
		
	})
	$articlePage.pagination({
		url:'/articles'
	})
	
	

})(jQuery);