$(function() {

	// Loader hide
	$('body').addClass('loaded');

	// Parallax init
	$('#header_bg').parallax({
		imageSrc: 'img/header_bg.jpg',
		zIndex: 1
	});

	// Menu functions
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

	// Sliders init
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
		infinite: false,
		prevArrow: $('#kromtech-news-prew'),
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
		infinite: false,
		prevArrow: $('#rnd64-news-prev'),
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
		infinite: false,
		prevArrow: $('#zeo-news-prev'),
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

	// Page scroll init
	$('a[rel="pageScroll"]').mPageScroll2id({
		clickedClass: 'scroll-clicked',
		targetClass: 'scroll-target',
		highlightClass: 'scroll-highlight',
		onStart:function(){
			menuClose();
		}
	});

	// Header animation
	var $header = $('.header-top');
	var $mainTitle = $('.header-title');
	var headerTimeLine = new TimelineLite();

	headerTimeLine.from($header, 1.5, {y: '-=100%', autoAlpha: 0, ease:Power4.easeInOut}, '+=0.5')
			.from($mainTitle, 1, {autoAlpha: 0, ease:Power4.easeInOut}, '-=0.5');

	// Waypoint+AnimateCSS functions
	(function($) {
		$.fn.animated = function(inEffect, oSet) {
			$(this).css("opacity", "0").addClass("animated");

			$(this).waypoint(function(direction) {
				if (direction === "down") {
					$(this.element).addClass(inEffect).css("opacity", "1")
				}
			}, {
				offset: oSet
			});
		};
	})(jQuery);

	$('.why-container').animated('fadeIn', '80%');
	$('.backtotop-button').animated('fadeInRight', '80%');
	$('.why-text').animated('fadeIn', '80%');
	$('.how-title').animated('fadeIn', '80%');
	$('.how-slider-wrapper').animated('fadeIn', '80%');
	$('.how-text-wrap').animated('fadeIn', '80%');
	$('.learn-more-button').animated('fadeInUp', '80%');
	$('.zeo-university-img-container').animated('fadeIn', '80%');
	$('.zeo-university-header').animated('fadeIn', '80%');
	$('.zeo-university-text').animated('fadeIn', '80%');
	$('.company-logo-container').animated('fadeInLeft', '80%');
	$('.company-aside').animated('fadeInLeft', '80%');
	$('.company-info-title').animated('fadeIn', '80%');
	$('.company-info-text').animated('fadeIn', '80%');
	$('.company-advent-item').animated('fadeIn', '80%');
	$('.kromtech-robo-container').animated('fadeIn', '80%');
	$('.kromtech-bg-robo').animated('fadeIn', '80%');
	$('.company-products-list').animated('fadeIn', '80%');
	$('.kromtech-partners-item').animated('fadeIn', '80%');
	$('.aggregator-container').animated('fadeIn', '80%');
	$('.onset-img-container').animated('fadeIn', '80%');
	$('.onset-advent-list').animated('fadeIn', '80%');
	$('.egg-logo').animated('fadeIn', '80%');
	$('.youtube-container').animated('fadeIn', '80%');
	$('.egg-features-container').animated('fadeIn', '80%');
	$('.egg-quote-container').animated('fadeIn', '80%');
	$('.egg-partners-container').animated('fadeIn', '80%');
	$('.jammy-info').animated('fadeIn', '80%');
	$('.jammy-features-title').animated('fadeIn', '80%');
	$('.indiegogo-banner').animated('zoomIn', '80%');
	$('.jammy-partners-container').animated('fadeIn', '80%');
	$('.novnify-key-container').animated('fadeIn', '80%');
	$('.novnify-circles-container').animated('fadeIn', '80%');
	$('.zoom-img-container').animated('fadeIn', '80%');
	$('.zoom-customers-wrapper').animated('fadeIn', '80%');
	$('.about-title').animated('fadeIn', '80%');
	$('.about-subtitle').animated('fadeIn', '80%');
	$('.story-year').animated('fadeIn', '80%');
	$('.story-sep-circle').animated('zoomIn', '80%');
	$('.story-text').animated('fadeIn', '80%');
	$('.management-title').animated('fadeIn', '80%');
	$('.manager-item').animated('fadeIn', '80%');
	$('.together-title').animated('fadeIn', '80%');
	$('.partners-list').animated('fadeIn', '80%');
	$('.join-title').animated('fadeIn', '80%');
	$('.join-text').animated('fadeIn', '80%');
	$('.join-slider-wrapper').animated('fadeIn', '80%');
	$('.contact-title').animated('fadeIn', '80%');
	$('.contact-list').animated('fadeIn', '80%');
	$('.contact-social-list').animated('fadeInUp', '80%');
	$('.footer-container').animated('fadeIn', '80%');

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