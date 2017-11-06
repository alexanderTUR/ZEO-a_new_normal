$(function() {

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
		nextArrow: $('#join-right-arrow')
	});

	$('#kromtech-news').slick({
		slidesToShow: 4,
		slidesToScroll: 4,
		dots: true,
		prevArrow: false,
		nextArrow: $('#kromtech-news-next'),
		dotsClass: 'aggregator-counter',
		appendDots: $('#kromtech-news-controls')
	});

	$('#rnd64-news').slick({
		slidesToShow: 4,
		slidesToScroll: 4,
		dots: true,
		prevArrow: false,
		nextArrow: $('#rnd64-news-next'),
		dotsClass: 'aggregator-counter',
		appendDots: $('#rnd64-news-controls')
	});

	$('#novnify-news').slick({
		slidesToShow: 4,
		slidesToScroll: 4,
		dots: true,
		prevArrow: false,
		nextArrow: $('#novnify-news-next'),
		dotsClass: 'aggregator-counter',
		appendDots: $('#novnify-news-controls')
	});

	$('#zeo-news').slick({
		slidesToShow: 4,
		slidesToScroll: 4,
		dots: true,
		prevArrow: false,
		nextArrow: $('#zeo-news-next'),
		dotsClass: 'aggregator-counter',
		appendDots: $('#zeo-news-controls')
	});

	$('#blog-news').slick({
		slidesToShow: 2,
		slidesToScroll: 1,
		dots: true,
		prevArrow: false,
		nextArrow: $('#blog-news-next'),
		dotsClass: 'aggregator-counter',
		appendDots: $('#blog-news-controls')
	});

	$('a[rel="pageScroll"]').mPageScroll2id({
		onStart:function(){
			menuClose();
		}
	});

	$('#header_bg').tubular({
		videoId: '8Sj-2LnG5Xk',
		start: 18,
		end: 25,
		mute: true,
		repeat: true
	});

});
