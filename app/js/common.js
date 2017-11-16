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


	$('a[rel="pageScroll"]').mPageScroll2id({
		clickedClass: 'scroll-clicked',
		targetClass: 'scroll-target',
		highlightClass: 'scroll-highlight',
		onStart:function(){
			menuClose();
		}
	});

});

// Youtube pause on scroll

var player1;
var player2;

function onYouTubePlayerAPIReady() {
	player1 = new YT.Player('player1', {
		events: {'onReady': onPlayerReady1}
	});
	player2 = new YT.Player('player2', {
		events: {'onReady': onPlayerReady2}
	});
}
function onPlayerReady1(event) {
	waypointYoutube1();
}

function onPlayerReady2(event) {
	waypointYoutube2();
}


function waypointYoutube1() {
	$('#player1').waypoint(function() {
		player1.pauseVideo();
	}, {
		offset: function() {
			return -this.element.clientHeight
		}
	});
}

function waypointYoutube2() {
	$('#player2').waypoint(function() {
		player2.pauseVideo();
	}, {
		offset: function() {
			return -this.element.clientHeight
		}
	});
}
