(function(){        //使用闭包来隔离作用域

	var currentImage = 1;
	var toLeft = $('.slider_control .to_left');
	var toRight = $('.slider_control .to_right');


	var containner = $('.slider .slider_container');

	toRight.on('click',function(){	
		switch(currentImage){
			case 1:
				containner.animate({left:'-480px'},600,'easeInCubic');
				currentImage++;
				break;
			case 2:
				containner.animate({left:'-960px'},600,'easeInCubic');
				currentImage++;
				break;
			case 3:
				break;
		}
	});

	toLeft.on('click',function(){
		switch(currentImage){
			case 1:
				break;
			case 2:
				containner.animate({left:'0'},600,'easeInCubic');
				currentImage--;
				break;
			case 3:
				containner.animate({left:'-480px'},600,'easeInCubic');
				currentImage--;
				break;
		}
	});

})();