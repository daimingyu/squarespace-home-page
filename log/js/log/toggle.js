(function(){        //使用闭包来隔离作用域
	

		
	var aLogin = $('.dr_log_foot .dr_log_foot_container .login');
	var aCreate = $('.dr_log_foot .dr_log_foot_container .create');
	var aRecover = $('.dr_log_foot .dr_log_foot_container .recover');
	var aGoogle = $('.dr_log_foot .dr_log_foot_container .google');

	var oLogin = $('.dr_log_container .dr_login_form');
	var oLogup = $('.dr_log_container .dr_logup_from');
	var oRecover = $('.dr_log_container .dr_recover');


	//Create an Account
	aCreate.on('click',function(){
		hide([oLogin,aCreate,aRecover]);
		show([oLogup,aLogin]);
	});


	//Already have an account? Login
	aLogin.on('click',function(){
		hide([oLogup,oRecover,aLogin]);
		show([oLogin,aCreate,aRecover,aGoogle]);
	});

	//Recover Account
	aRecover.on('click',function(){
		hide([oLogin,aCreate,aRecover,aGoogle]);
		show([oRecover,aLogin]);
	});

	//Log in with Google
	aGoogle.on('click',function(){
		//code here
	});

	/**
	 * [hide 以藏元素]
	 * @param  {[type]} arr [description]
	 * @return {[type]}     [description]
	 */
	function hide(arr){
		arr.forEach(function(o){
			o.css('display','none');
		});
	}
	/**
	 * [show 显示元素]
	 * @param  {[type]} arr [description]
	 * @return {[type]}     [description]
	 */
	function show(arr){
		arr.forEach(function(o){
			o.css('display','block');
		});
	}

})();
