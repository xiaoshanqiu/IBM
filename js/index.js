$(function(){
	// 鼠标放上出现/消失
	$('.menu-header ul li').mouseover(function(){
		$(this).css({borderBottom:'3px solid #1e05b8',color:'#1e05b8'}).fadeIn(3000).stop().siblings().css({border:'none',color:'black'})
		$('.insert').stop().slideDown(1000)
	})
	$('.insert').mouseleave(function(){
		$('.menu-header ul li').css({border:'none',color:'black'})
		$('.insert').stop().slideUp(1000)
	})
	// 鼠标放上出现箭头
		var span=$('<span></span>');
	$('.insert-list ul li').mouseover(function(){
		span.text('>');
		span.css({float:'right',marginRight:'10px'});
		$(this).append(span);
	});		
	$('.insert-list ul li').mouseleave(function(){
		$(this).find('span').text('');
	});

	$('.insert-list ul li').mouseover(function(){
		var index = $(this).index();
		$('.insert-uu li').eq(index).show().siblings().hide();


	})






	// 鼠标点击出现子菜单
$('.threeLine').click(function(){
		$('.shade').css({display:'block'})
	})
	$('.buto').click(function(){
		$('.shade').css({display:'none'})
	})
	//点击出现二级菜单
		// var newspan = $('<span></span>');
	$('.jiaH').click(function(){
			// newspan.text('-');
			// newspan.css({background:'red'});

		$('.spaBut ul ').slideToggle(500);
		$('.jiaH').text('-');
		// $(this).append(newspan);
	})
	//置顶
	$(window).scroll(function(){
		var hei = $(this).scrollTop();
		if(hei>500){
			$('.button-top').fadeIn(2000);
		}else{
			$('.button-top').fadeOut(2000);

		}
	})












})