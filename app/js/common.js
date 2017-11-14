$(function() {

	$('#top').fadeIn();

	var $burgerIcon = $('.burger-icon');
	var $menuList = $('.main-menu-list');

	$('.header-burger').click(function () {
		$burgerIcon.toggleClass('burger-close');
		$menuList.toggleClass('menu-open');
	});

	$(window).resize(function() {
		menuClose();
	});

	function menuClose () {
		if ($burgerIcon.hasClass('burger-close')) {
			$burgerIcon.removeClass('burger-close');
			$menuList.removeClass('menu-open')
		}
	}

	$('#how-slider').slick({
		prevArrow: $('#how-left-arrow'),
		nextArrow: $('#how-right-arrow'),
		adaptiveHeight: true
	});

	$('#join-slider').slick({
		slidesToShow: 5,
		slidesToScroll: 1,
		prevArrow: $('#join-left-arrow'),
		nextArrow: $('#join-right-arrow'),
		responsive: [
			{
				breakpoint: 1377,
				settings: {
					slidesToShow: 4,
					slidesToScroll: 1
				}
			},
			{
				breakpoint: 769,
				settings: {
					slidesToShow: 3,
					slidesToScroll: 1
				}
			},
			{
				breakpoint: 426,
				settings: {
					slidesToShow: 2,
					slidesToScroll: 1
				}
			},
			{
				breakpoint: 376,
				settings: {
					slidesToShow: 1,
					slidesToScroll: 1
				}
			}]
	});

	$('#zoom-slider').slick({
		slidesToShow: 3,
		slidesToScroll: 1,
		prevArrow: $('#zoom-left-arrow'),
		nextArrow: $('#zoom-right-arrow'),
		responsive: [
			{
				breakpoint: 769,
				settings: {
					slidesToShow: 1,
					slidesToScroll: 1
				}
			}]
	});

	$('#kromtech-news').slick({
		slidesToShow: 4,
		slidesToScroll: 4,
		dots: true,
		prevArrow: false,
		nextArrow: $('#kromtech-news-next'),
		dotsClass: 'aggregator-counter',
		appendDots: $('#kromtech-news-controls'),
		responsive: [
			{
				breakpoint: 769,
				settings: {
					vertical: true,
					slidesToShow: 5,
					slidesToScroll: 5
				}
			},
			{
				breakpoint: 481,
				settings: {
					vertical: true,
					slidesToShow: 3,
					slidesToScroll: 3
				}
			}]
	});

	$('#rnd64-news').slick({
		slidesToShow: 4,
		slidesToScroll: 4,
		dots: true,
		prevArrow: false,
		nextArrow: $('#rnd64-news-next'),
		dotsClass: 'aggregator-counter',
		appendDots: $('#rnd64-news-controls'),
		responsive: [
			{
				breakpoint: 769,
				settings: {
					vertical: true,
					slidesToShow: 5,
					slidesToScroll: 5
				}
			},
			{
				breakpoint: 481,
				settings: {
					vertical: true,
					slidesToShow: 3,
					slidesToScroll: 3
				}
			}]
	});

	$('#novnify-news').slick({
		slidesToShow: 4,
		slidesToScroll: 4,
		dots: true,
		prevArrow: false,
		nextArrow: $('#novnify-news-next'),
		dotsClass: 'aggregator-counter',
		appendDots: $('#novnify-news-controls'),
		responsive: [
			{
				breakpoint: 769,
				settings: {
					vertical: true,
					slidesToShow: 5,
					slidesToScroll: 5
				}
			},
			{
				breakpoint: 481,
				settings: {
					vertical: true,
					slidesToShow: 3,
					slidesToScroll: 3
				}
			}]
	});

	$('#zeo-news').slick({
		slidesToShow: 4,
		slidesToScroll: 4,
		dots: true,
		prevArrow: false,
		nextArrow: $('#zeo-news-next'),
		dotsClass: 'aggregator-counter',
		appendDots: $('#zeo-news-controls'),
		responsive: [
			{
				breakpoint: 769,
				settings: {
					vertical: true,
					slidesToShow: 5,
					slidesToScroll: 5
				}
			},
			{
				breakpoint: 481,
				settings: {
					vertical: true,
					slidesToShow: 3,
					slidesToScroll: 3
				}
			}]
	});

	// $('#blog-news').slick({
	// 	slidesToShow: 2,
	// 	slidesToScroll: 1,
	// 	dots: true,
	// 	prevArrow: false,
	// 	nextArrow: $('#blog-news-next'),
	// 	dotsClass: 'aggregator-counter',
	// 	appendDots: $('#blog-news-controls'),
	// 	responsive: [
	// 		{
	// 			breakpoint: 769,
	// 			settings: {
	// 				slidesToShow: 1,
	// 				slidesToScroll: 1,
	// 				prevArrow: $('#blog-left-arrow'),
	// 				nextArrow: $('#blog-right-arrow')
	// 			}
	// 		}]
	// });

	$('a[rel="pageScroll"]').mPageScroll2id({
		clickedClass: 'scroll-clicked',
		targetClass: 'scroll-target',
		highlightClass: 'scroll-highlight',
		onStart:function(){
			menuClose();
		}
	});

	// $('#header_bg').tubular({
	// 	videoId: '8Sj-2LnG5Xk',
	// 	start: 18,
	// 	end: 25,
	// 	mute: true,
	// 	repeat: true
	// });

});
