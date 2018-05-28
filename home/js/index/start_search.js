(function(){        //使用闭包来隔离作用域

	!function(){     //主函数
		var input = $('.header .header_search .header_search_input input');	
		var btn = $('.header .header_search .header_search_input .search_submit')

		input.on('input propertychange', function(){
			if(isOk([input])){
				show(btn);
			}else{
				hide(btn);
			}
		});
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
	 * [show 从左到右渐显]
	 * @param  {[type]} btn [description]
	 * @return {[type]}     [description]
	 */
	function show(btn){
		btn.css('display','block');
		btn.removeClass('fadeOutRight');
		btn.addClass('fadeInLeft');
	}
	/**
	 * [hide 从右到作渐隐]
	 * @param  {[type]} btn [description]
	 * @return {[type]}     [description]
	 */
	function hide(btn){
		btn.removeClass('fadeInLeft');
		btn.addClass('fadeOutRight');
	}

})();