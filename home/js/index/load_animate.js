(function(){        //使用闭包来隔离作用域

	!function(){     //主函数
		var dImg1 = $('.layer_display .d_img_1');
		var dImg2 = $('.layer_display .d_img_2');
		var dVideo =$('.layer_display .d_video');
		var video =$('.layer_display .d_video video');

		var hNav = $('.header_nav');
		var hSearch = $('.header_search');

		hNav.animate({opacity:1},1000,'swing',function(){
			hSearch.animate({opacity:1},1000,'swing',function(){
				showUp(dImg1);
				showDown(dImg2);
				showDown(dVideo);
				video.get(0).play();
			});
		});

	}();
	/**
	 * [showUp 从下到上渐显]
	 * @param  {[type]} obj [description]
	 * @return {[type]}     [description]
	 */
	function showUp(obj){
		obj.css('display','block');
		obj.addClass('fadeInUp');
	}
	/**
	 * [showDown 从上到下渐显]
	 * @param  {[type]} obj [description]
	 * @return {[type]}     [description]
	 */
	function showDown(obj){
		obj.css('display','block');
		obj.addClass('fadeInDown');
	}

})();