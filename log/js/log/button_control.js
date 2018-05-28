(function(){        //使用闭包来隔离作用域
	
	!function(){     //主函数

		//dr_login_form
		var login_username =  $('.dr_login_form .username');
		var login_password =  $('.dr_login_form .password');
		var login_button = $('.dr_login_form .button');


		[login_username,login_password].forEach(function(o){
			o.on('input propertychange', function(){
				if(isOk([login_username,login_password])){
					enableButton(login_button)
				}else{
					disableButton(login_button);
				}
			});
		});

		//dr_logup_from
		var logup_firstName =  $('.dr_logup_from .firstName');
		var logup_lastName =  $('.dr_logup_from .lastName');
		var logup_username =  $('.dr_logup_from .username');
		var logup_password =  $('.dr_logup_from .password');
		var logup_button = $('.dr_logup_from .button');


		[logup_firstName,logup_lastName,logup_username,logup_password].forEach(function(o){
			o.on('input propertychange', function(){
				if(isOk([logup_username,logup_password,logup_firstName,logup_lastName])){
					enableButton(logup_button)
				}else{
					disableButton(logup_button);
				}
			})
		});


		//dr_recover
		var recover_password =  $('.dr_recover .username');
		var recover_button = $('.dr_recover .button');

		recover_password.on('input propertychange', function(){
			if(isOk([recover_password])){
				enableButton(recover_button)
			}else{
				disableButton(recover_button);
			}
		})
		
	}();

	/**
	 * [isOk 判断每个 input 是否都准备好了]
	 * @param  {[type]}  arr [description]
	 * @return {Boolean}     [description]
	 */
	function isOk(arr){
		var flag = true;
		arr.forEach(function(o){
			if(o.val() === '') flag = false;
		});
		return flag;
	}
	/**
	 * [enableButton 激活button]
	 * @param  {[type]} button [description]
	 * @return {[type]}        [description]
	 */
	function enableButton(button){
		button.attr('disabled',false);
		button.css('background','#000000');
		button.css('cursor','pointer');
	}
	/**
	 * [disableButton 禁用button]
	 * @param  {[type]} button [description]
	 * @return {[type]}        [description]
	 */
	function disableButton(button){
		button.attr('disabled',true);
		button.css('background','#666666');
		button.css('cursor','default');
	}

})();