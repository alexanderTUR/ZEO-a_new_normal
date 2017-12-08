$(function() {

	// Share to social function
	function windowPopup(url, width, height) {
		var left = Math.floor(($(window).width() - width) / 2),
			top = Math.floor(($(window).height() - height) / 2);
		window.open(
			url,
			"",
			"menubar=no,toolbar=no,resizable=yes,scrollbars=yes,width=" + width + ",height=" + height + ",top=" + top + ",left=" + left
		);
	}

	$(".js-social-share").on("click", function(e) {
		e.preventDefault();
    var url = $(this).attr("href") + document.location.href;
		windowPopup(url, 500, 300);
	});

	// Loader hide
	setTimeout(function(){$('body').addClass('loaded');}, 1000);

	// Parallax init
	$('#header_bg').parallax({
		zIndex: 1
	});

	// Menu functions
	mobileMenuSwich();
	function mobileMenuSwich() {
		var $burgerIcon = $('.burger-icon');
		var $menuList = $('.main-menu-list');

		$('.header-burger').click(function () {
			$burgerIcon.toggleClass('burger-close');
			$menuList.toggleClass('menu-open');
		});
	}
	function menuClose () {
		if ($('.burger-icon').hasClass('burger-close')) {
			$('.burger-icon').removeClass('burger-close');
			$('.main-menu-list').removeClass('menu-open')
		}
	}

	$(window).resize(function() {
		menuClose();
	});

	// Sliders init
	$('#how-slider').slick({
		prevArrow: $('#how-left-arrow'),
		nextArrow: $('#how-right-arrow'),
		lazyLoad: 'progressive'
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
		infinite: false,
		prevArrow: $('#novnify-news-prew'),
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

	// Page scroll animation function
	pageScroll();
	function pageScroll() {
		var pageScrollCtrl = new ScrollMagic.Controller({
			// addIndicators: true,
			globalSceneOptions: {
				triggerHook: 0
			}
		});

		pageScrollCtrl.scrollTo(function (newpos) {
			TweenLite.to(window, 1.5, {scrollTo: {y: newpos}, ease:Power1.easeInOut});
		});

		$(document).on("click", "a[rel='pageScroll']", function (e) {
			var id = $(this).attr("href");
			if ($(id).length > 0) {
				e.preventDefault();
				// trigger scroll
				pageScrollCtrl.scrollTo(id);
				// if supported by the browser we can even update the URL.
				if (window.history && window.history.pushState) {
					history.pushState("", document.title, id);
				}
			}
			// close menu on click
			menuClose();
		});
	}

	// MainPage animation init
	if($('#main').length) {
		headerMainAnimation();
	}

	// Header animation
	function headerMainAnimation() {
		var $mainHeaderContainer = $('.header-top'),
			$headerLogo = $('.header-logo-container'),
			$menuItems = $('.menu-item'),
			$socialIcons = $('.social-item'),
			$mainTitle = $('.header-title'),
			headerTimeLine = new TimelineLite();

		headerTimeLine
			.from($mainHeaderContainer, 1, {y: '-=100%', autoAlpha: 0, ease:Power4.easeInOut}, '+=1.2')
			.addLabel('startHeaderAnimation', '-=0.5')
			.from($headerLogo, 1, {x: '-=100%', autoAlpha: 0, ease:Power4.easeInOut}, 'startHeaderAnimation', '-=0.5')
			.staggerFrom($menuItems, 1, {y: '+=50px', autoAlpha: 0, ease:Power4.easeInOut}, 0.1, 'startHeaderAnimation')
			.staggerFrom($socialIcons, 0.8, {x: '+=50px', autoAlpha: 0, ease:Power4.easeInOut}, 0.15, '-=0.8')
			.from($mainTitle, 1, {autoAlpha: 0, ease:Power4.easeInOut}, '-=1.5')
	}

	// // Main ScrollMagic controller init
	// var mainScrollMagicController = new ScrollMagic.Controller({
	// 	addIndicators: true,
	// 	globalSceneOptions: {
	// 		triggerHook: 0.9
	// 	}
	// });
	//
	// // Why header animation
	// var $whyTitle = $('.why-title'),
	// 	$titleAccent = $('.why-title>.title-accent'),
	// 	$whyTitleTween = new TimelineLite();
	//
	// $whyTitleTween
	// 	.from($whyTitle, 1.5, {y:'+=100px', autoAlpha: 0, ease:Power4.easeInOut})
	// 	.from($titleAccent, 1, {color:'#333', ease:Power4.easeInOut}, 1.5);
	//
	// var $whyTitleScene = new ScrollMagic.Scene({
	// 	triggerElement: '.why-how-section'
	// })
	// 	.setTween($whyTitleTween)
	// 	.addTo(mainScrollMagicController);
	//
	// // Why back-on-top button animation
	// var $whyBackOnTopButton = $('#why>.backtotop-button'),
	// 	$whyBackOnTop = TweenLite.from($whyBackOnTopButton, 1, {x:'+=100px', autoAlpha: 0, ease:Power4.easeInOut});
	//
	// var whyBackOnTopScene = new ScrollMagic.Scene({
	// 	triggerElement: $whyBackOnTopButton
	// })
	// 	.setTween($whyBackOnTop)
	// 	.addTo(mainScrollMagicController);
	//
	// // Why text in red block animation
	// var $whyText = $('.why-text'),
	// 	$whyTextDuration = $('.why-text-container').outerHeight(),
	// 	$whyTextContianer = $('.why-text-container')
	// 	whyTextimeLine = new TimelineLite();
	//
	// whyTextimeLine
	// 	.staggerFrom($whyText, 1, {y: '+=50px', autoAlpha: 0, ease:Power4.easeInOut}, 1);
	//
	// var whyTextScene = new ScrollMagic.Scene({
	// 	triggerElement: '.why-text-container',
	// 	// duration: $whyTextDuration
	// 	// duration: updateDuration()
	// })
	// 	.setTween(whyTextimeLine)
	// 	.addTo(mainScrollMagicController);
	//
	// // Change duration on resize
	// function updateDuration (sc, el) {
	// 	var duration = sc.duration();
	// 	var durationValueCache;
	// 	function getDuration () {
	// 		return durationValueCache = el.outerHeight();
	// 	}
	// 	sc.duration(getDuration); // supply duration method
	// }
	// $(window).on("resize", updateDuration); // update the duration when the window size changes
	// $(window).triggerHandler("resize"); // set to initial value
	//
	// // var duration = whyTextScene.duration();
	// // var durationValueCache;
	// // function getDuration () {
	// // 	return durationValueCache;
	// // }
	// // function updateDuration (e) {
	// // 	durationValueCache = $('.why-text-container').outerHeight();
	// // }
	// // $(window).on("resize", updateDuration); // update the duration when the window size changes
	// // $(window).triggerHandler("resize"); // set to initial value
	// // whyTextScene.duration(getDuration); // supply duration method
	//
	// // How back-on-top button animation
	// var $howBackOnTopButton = $('#how>.backtotop-button'),
	// 	$howBackOnTop = TweenLite.from($howBackOnTopButton, 1, {x:'+=100px', autoAlpha: 0, ease:Power4.easeInOut});
	//
	// var howBackOnTopScene = new ScrollMagic.Scene({
	// 	triggerElement: $howBackOnTopButton
	// })
	// 	.setTween($howBackOnTop)
	// 	.addTo(mainScrollMagicController);
	//
	// // How header animation
	// var $howTitle = $('.how-title'),
	// 	$howTitleAccent = $('.how-title>.title-accent'),
	// 	$howTitleTween = new TimelineLite();
	//
	// $howTitleTween
	// 	.from($howTitle, 1.5, {y:'+=100px', autoAlpha: 0, ease:Power4.easeInOut})
	// 	.from($howTitleAccent, 1, {color:'#333', ease:Power4.easeInOut}, 1.5);
	//
	// var $howTitleScene = new ScrollMagic.Scene({
	// 	triggerElement: '.how-container',
	// 	offset: '190px'
	// })
	// 	.setTween($howTitleTween)
	// 	.addTo(mainScrollMagicController);
	//
	// // How slider animation
	// var $howSlider = $('.how-slider-container'),
	// 	$howSliderLArrow = $('.how-slider-wrapper > .slider-left-arrow'),
	// 	$howSliderRArrow = $('.how-slider-wrapper > .slider-right-arrow'),
	// 	$howSliderTextBlock = $('.slide-title-container'),
	// 	$howSliderCountBlock = $('.slide-counter-container'),
	// 	sliderTimeLine = new TimelineLite();
	//
	// sliderTimeLine
	// 	.from($howSlider, 1, {y:'+=100px', autoAlpha: 0, ease:Power4.easeInOut}, '-=1')
	// 	.from($howSliderLArrow, 1, {x:'-=100px', autoAlpha: 0, ease:Power4.easeInOut, deley: 2})
	// 	.from($howSliderRArrow, 1, {x:'+=100px', autoAlpha: 0, ease:Power4.easeInOut}, '-=1')
	// 	.from($howSliderTextBlock, 1, {y:'+=100px', autoAlpha: 0, ease:Power4.easeInOut}, '-=1')
	// 	.from($howSliderCountBlock, 1, {y:'+=100px', autoAlpha: 0, ease:Power4.easeInOut}, '-=1');
	//
	// var howHowScene = new ScrollMagic.Scene({
	// 	triggerElement: '.how-slider-wrapper'
	// })
	// 	.setTween(sliderTimeLine)
	// 	.addTo(mainScrollMagicController);
	//
	// // How slider text animation
	// var $howSliderText = $('.how-text-wrap'),
	// 	$howSliderTextTween = TweenLite.from($howSliderText, 1, {y:'+=100px', autoAlpha: 0, ease:Power4.easeInOut});
	//
	// var howSliderTextScene = new ScrollMagic.Scene({
	// 	triggerElement: '.how-text'
	// })
	// 	.setTween($howSliderTextTween)
	// 	.addTo(mainScrollMagicController);
	//
	// var $univercityTitle = $('.zeo-university-header'),
	// 	$univercityText = $('.zeo-university-text'),
	// 	$univercityLearnMore = $('.zeo-university-info-container>.learn-more-wrapper'),
	// 	univercityTextTimeLine = new TimelineLite(),
	// 	univercityDuration = $('.zeo-university-section').outerHeight(true);
	//
	// univercityTextTimeLine
	// 	.from($univercityTitle, 1, {y:'+=100px', autoAlpha: 0, ease:Power4.easeInOut})
	// 	.staggerFrom($univercityText, 1, {y: '+=50px', autoAlpha: 0, ease:Power4.easeInOut}, 0.5, '-=0.5')
	// 	.from($univercityLearnMore, 1, {y:'+=100px', autoAlpha: 0, ease:Power4.easeInOut});
	//
	// var univercityTextScene = new ScrollMagic.Scene({
	// 	triggerElement: '.zeo-university-section',
	// 	duration: $whyTextDuration
	// })
	// 	.setTween(univercityTextTimeLine)
	// 	.addTo(mainScrollMagicController);

	// Change duration on resize
	// var durationUnivercity = univercityTextScene.duration();
	// var durationValueCache2;
	// function getDuration () {
	// 	return durationValueCache2;
	// }
	// function updateDuration (e) {
	// 	durationValueCache2 = $('.zeo-university-section').outerHeight(true);
	// }
	// $(window).on("resize", updateDuration); // update the duration when the window size changes
	// $(window).triggerHandler("resize"); // set to initial value
	// univercityTextScene.duration(getDuration); // supply duration method


	if($('#all-news').length) {
		headerNewsAnimation();
		filtersAnimation();
		newsAnimation();
		paginationAndFooterAnimation();
	}

	function headerNewsAnimation() {
		var $headerLogo = $('.header-logo-container'),
			$menuItems = $('.menu-item'),
			$socialIcons = $('.social-item'),
			headerTimeLine = new TimelineLite();

		headerTimeLine
			.addLabel('startHeaderAnimation', '+=1.5')
			.from($headerLogo, 1, {x: '-=100%', autoAlpha: 0, ease:Power4.easeInOut}, 'startHeaderAnimation', '-=0.5')
			.staggerFrom($menuItems, 1, {y: '+=50px', autoAlpha: 0, ease:Power4.easeInOut}, 0.1, 'startHeaderAnimation')
			.staggerFrom($socialIcons, 0.8, {x: '+=50px', autoAlpha: 0, ease:Power4.easeInOut}, 0.15, '-=0.8')
	}

	function filtersAnimation() {
		var $newsTitle = $('.all-news-main-title'),
			$filterTitle = $('.filter-title'),
			$filtersItems = $('.filter-button'),
			filterTimeLine = new TimelineLite();

		filterTimeLine
			.addLabel('startFilterAnimation', '+=1.5')
			.from($newsTitle, 1, {x: '-=100%', autoAlpha: 0, ease:Power4.easeInOut}, 'startFilterAnimation')
			.from($filterTitle, 1, {y: '+=30px', autoAlpha: 0, ease:Power4.easeInOut}, 'startFilterAnimation')
			.staggerFrom($filtersItems, 0.5, {x: '-=60px', autoAlpha: 0, ease:Power4.easeIn}, 0.1, '-=0.4')

	}

	function newsAnimation() {
		var newsItem = $('.news-thumbnail-item'),
			newsTimeLine = new TimelineLite();

		newsTimeLine
			.staggerFrom(newsItem, 1, {y: '+=100%', autoAlpha: 0, ease:Back.easeOut.config(1.7)}, 0.05, '+=2.5')
	}

	function paginationAndFooterAnimation() {
		var $prevButton = $('.aggregator-prev-button'),
			$nextButton = $('.aggregator-next-button'),
			$numbersButton = $('.aggregator-counter > li'),
			$footerLogo = $('.footer-logo-container'),
			$footerCopy = $('.footer-copy'),
			$footerSubCopy = $('.footer-subcopy'),
			paginationTimeLine = new TimelineLite();

		paginationTimeLine

			.from($prevButton, 2, {x:'+=100%', autoAlpha: 0, ease:Power4.easeInOut})
			.from($nextButton, 2, {x:'-=100%', autoAlpha: 0, ease:Power4.easeInOut}, '-=2')
			.staggerFrom($numbersButton, 1, {y: '+=100%', autoAlpha: 0, ease:Power4.easeInOut}, 0.1, '-=1.5')
			.addLabel('startFooterAnimation', '+=2')
			.from($footerLogo, 1, {rotation: 190, autoAlpha: 0, ease:Power4.easeInOut}, 'startFooterAnimation')
			.from($footerCopy, 1, {y:'+=100%', autoAlpha: 0, ease:Power4.easeInOut}, 'startFooterAnimation')
			.from($footerSubCopy, 1, {y:'+=100%', autoAlpha: 0, ease:Power4.easeInOut, delay: 1}, 'startFooterAnimation');

		var paginationScrollCtrl = new ScrollMagic.Controller({
			// addIndicators: true,
			globalSceneOptions: {
				triggerHook: 1
			}
		});

		var rhombusScene = new ScrollMagic.Scene({
			triggerElement: '.aggregator-control-container',
			duration: "320"
		})
			.setTween(paginationTimeLine)
			.addTo(paginationScrollCtrl);

	}

	if($('#single-news').length) {
		headerNewsAnimation();
	}

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
	$('.indiegogo-banner').animated('fadeIn', '80%');
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
	// $('.footer-container').animated('fadeIn', '80%');

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