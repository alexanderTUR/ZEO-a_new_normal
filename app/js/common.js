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

	// Menu scroll init
	$("a[rel='pageScroll']").mPageScroll2id({
		onStart:function(){
			menuClose();
		}
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

	// MainPage animation init
	if($('#main').length) {
		headerMainAnimation();
		mainAnimation();
	}

	// Header animation
	function headerMainAnimation() {
		var $mainHeaderContainer = $('.header-top'),
			$headerLogo = $('.header-logo-container'),
			$menuItems = $('.menu-item'),
			$socialIcons = $mainHeaderContainer.find('.social-item'),
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

	// Main page animation
	function mainAnimation() {
		// Main ScrollMagic controller init
		var mainScrollMagicController = new ScrollMagic.Controller({
			globalSceneOptions: {
				triggerHook: 0.9,
				// addIndicators: true
			}
		});

		// Back on top button animation
		$('.backtotop-button').each(function () {
			var backOnTopTween = new TimelineLite();
			backOnTopTween
				.from(this, 0.5, {autoAlpha: 0, ease:Power4.easeInOut})
				.from(this, 0.7, {width: '58px', ease:Power4.easeInOut}, '-=0.3');
			new ScrollMagic.Scene({
				triggerElement: this
			})
				.setTween(backOnTopTween)
				.addTo(mainScrollMagicController);
		});

		// Learn more animation
		$('.learn-more-wrapper').each(function () {
			var button = $(this).find('.learn-more-button'),
				learnMoreTween = TweenLite.from(button, 1, {y:'+=100px', autoAlpha: 0, ease:Power4.easeInOut});
			new ScrollMagic.Scene({
				triggerElement: this
			})
				.setTween(learnMoreTween)
				.addTo(mainScrollMagicController);
		});

		// Company logo animation
		$('.company-logo-container').each(function () {
			var logo = $(this).children();
			var companyLogoTween = TweenLite.from(logo, 1, {x:'-=100px', autoAlpha: 0, ease:Power3.easeInOut});
			new ScrollMagic.Scene({
				triggerElement: logo
			})
				.setTween(companyLogoTween)
				.addTo(mainScrollMagicController);
		});

		// Company info animation
		$('.company-info-block').each(function () {
			var $title = $(this).find('.company-info-title'),
				$text = $(this).find('.company-info-text'),
				companyInfoTimeLine = new TimelineLite();

			companyInfoTimeLine
				.from($title, 1, {y:'+=100px', autoAlpha: 0, ease:Power4.easeInOut})
				.from($text, 1, {autoAlpha: 0, ease:Power4.easeInOut}, '-=0.5');

			new ScrollMagic.Scene({
				triggerElement: this
			})
				.setTween(companyInfoTimeLine)
				.addTo(mainScrollMagicController);
		});

		// Company why animation
		$('.company-why-container').each(function () {
			var $title = $(this).find('.company-why-head'),
				$text = $(this).find('.company-why-text'),
				companyWhyTimeLine = new TimelineLite();

			companyWhyTimeLine
				.from($title, 1, {x:'-=100px', autoAlpha: 0, ease:Power4.easeInOut})
				.from($text, 1, {autoAlpha: 0, ease:Power4.easeInOut}, '-=0.5');

			new ScrollMagic.Scene({
				triggerElement: this
			})
				.setTween(companyWhyTimeLine)
				.addTo(mainScrollMagicController);
		});

		// Company how animation
		$('.company-how-container').each(function () {
			var $title = $(this).find('.company-how-head'),
				$text = $(this).find('.company-how-text'),
				companyWhyTimeLine = new TimelineLite();

			companyWhyTimeLine
				.from($title, 1, {x:'-=100px', autoAlpha: 0, ease:Power4.easeInOut})
				.from($text, 1, {autoAlpha: 0, ease:Power4.easeInOut}, '-=0.5');

			new ScrollMagic.Scene({
				triggerElement: this
			})
				.setTween(companyWhyTimeLine)
				.addTo(mainScrollMagicController);
		});

		// Company advent animation
		$('.company-advent-list').each(function () {
			var $advent = $(this).find('.company-advent-item'),
				companyAdventTimeLine = new TimelineLite();

			companyAdventTimeLine
				.staggerFrom($advent, 1, {y: '+=50px', autoAlpha: 0, ease:Power4.easeInOut}, 0.2);

			new ScrollMagic.Scene({
				triggerElement: this
			})
				.setTween(companyAdventTimeLine)
				.addTo(mainScrollMagicController);
		});

		// Company product animation
		$('.company-products-list').each(function () {
			var $products = $(this).find('.company-products-item'),
				companyProductsTimeLine = new TimelineLite();

			companyProductsTimeLine
				.staggerFrom($products, 1, {y: '+=50px', autoAlpha: 0, ease:Power4.easeInOut}, 0.1);

			new ScrollMagic.Scene({
				triggerElement: this
			})
				.setTween(companyProductsTimeLine)
				.addTo(mainScrollMagicController);
		});

		// Why header animation
		var $whyTitle = $('.why-title'),
			$titleAccent = $('.why-title>.title-accent'),
			$whyTitleTween = new TimelineLite();

		$whyTitleTween
			.from($whyTitle, 1.5, {y:'+=100px', autoAlpha: 0, ease:Power4.easeInOut})
			.from($titleAccent, 1, {color:'#333', ease:Power4.easeInOut}, 1.5);

		var $whyTitleScene = new ScrollMagic.Scene({
			triggerElement: '.why-how-section'
		})
			.setTween($whyTitleTween)
			.addTo(mainScrollMagicController);

		// Why text in red block animation
		var $whyText = $('.why-text'),
			whyDuration = $('.why-text-container').innerHeight(),
			whyTextimeLine = new TimelineLite();

		function getWhyDuration() {
			return whyDuration;
		}
		$(window).on("resize", function () {
			whyDuration = $('.why-text-container').innerHeight();
		});

		whyTextimeLine
			.staggerFrom($whyText, 1, {y: '+=50px', autoAlpha: 0, ease:Power4.easeInOut}, 1);

		var whyTextScene = new ScrollMagic.Scene({
			triggerElement: '.why-text-container',
			duration: getWhyDuration
		})
			.setTween(whyTextimeLine)
			.addTo(mainScrollMagicController);

		// How header animation
		var $howTitle = $('.how-title'),
			$howTitleAccent = $('.how-title>.title-accent'),
			$howTitleTween = new TimelineLite();

		$howTitleTween
			.from($howTitle, 1.5, {y:'+=100px', autoAlpha: 0, ease:Power4.easeInOut})
			.from($howTitleAccent, 1, {color:'#333', ease:Power4.easeInOut}, 1.5);

		var $howTitleScene = new ScrollMagic.Scene({
			triggerElement: '.how-container',
			offset: '190px'
		})
			.setTween($howTitleTween)
			.addTo(mainScrollMagicController);

		// How slider animation
		var $howSlider = $('.how-slider-container'),
			$howSliderLArrow = $('.how-slider-wrapper > .slider-left-arrow'),
			$howSliderRArrow = $('.how-slider-wrapper > .slider-right-arrow'),
			$howSliderTextBlock = $('.slide-title-container'),
			$howSliderCountBlock = $('.slide-counter-container'),
			sliderTimeLine = new TimelineLite();

		sliderTimeLine
			.from($howSlider, 1, {y:'+=100px', autoAlpha: 0, ease:Power4.easeInOut}, '-=1')
			.from($howSliderLArrow, 1, {x:'-=100px', autoAlpha: 0, ease:Power4.easeInOut, deley: 2})
			.from($howSliderRArrow, 1, {x:'+=100px', autoAlpha: 0, ease:Power4.easeInOut}, '-=1')
			.from($howSliderTextBlock, 1, {autoAlpha: 0, ease:Power4.easeInOut}, '-=1')
			.from($howSliderCountBlock, 1, {autoAlpha: 0, ease:Power4.easeInOut}, '-=1');

		var howHowScene = new ScrollMagic.Scene({
			triggerElement: '.how-slider-wrapper'
		})
			.setTween(sliderTimeLine)
			.addTo(mainScrollMagicController);

		// How slider text animation
		var $howSliderText = $('.how-text-wrap'),
			$howSliderTextTween = TweenLite.from($howSliderText, 1, {y:'+=100px', autoAlpha: 0, ease:Power4.easeInOut});

		var howSliderTextScene = new ScrollMagic.Scene({
			triggerElement: '.how-text'
		})
			.setTween($howSliderTextTween)
			.addTo(mainScrollMagicController);

		// University animation
		var $universityTitle = $('.zeo-university-header'),
			$universityText = $('.zeo-university-text'),
			$univercityImage = $('.zeo-university-img-container'),
			universityDuration = $('.zeo-university-section').innerHeight(),
			universityTextTimeLine = new TimelineLite();

		function getUniversityDuration() {
			return universityDuration;
		}
		$(window).on("resize", function () {
			universityDuration = $('.zeo-university-section').innerHeight();
		});

		universityTextTimeLine
			.from($universityTitle, 1, {y:'+=100px', autoAlpha: 0, ease:Power4.easeInOut})
			.from($univercityImage, 1, {autoAlpha: 0, ease:Power4.easeInOut}, '-=1')
			.staggerFrom($universityText, 1, {y: '+=50px', autoAlpha: 0, ease:Power4.easeInOut}, 0.5, '-=0.5');

		var universityTextScene = new ScrollMagic.Scene({
			triggerElement: '.zeo-university-section',
			duration: getUniversityDuration
		})
			.setTween(universityTextTimeLine)
			.addTo(mainScrollMagicController);

		// Kromtech partners animation
		$('.kromtech-partners-item').each(function () {
			var $parnerTitle = $(this).find('.partners-title'),
				$parnersItems = $(this).find('.partners-logo-container>img'),
				kromtechPartnersTimeLine = new TimelineLite();

			kromtechPartnersTimeLine
				.from($parnerTitle, 1, {y:'+=100px', autoAlpha: 0, ease:Power4.easeInOut})
				.staggerFrom($parnersItems, 1, {y: '+=50px', autoAlpha: 0, ease:Power4.easeInOut}, 0.2, '-=0.5');

			new ScrollMagic.Scene({
				triggerElement: this
			})
				.setTween(kromtechPartnersTimeLine)
				.addTo(mainScrollMagicController);
		});

		// Kromtech image 1 animation
		var $kromtechImg1 = $('.kromtech-bg-robo'),
			$kromtechImg1Tween = TweenLite.from($kromtechImg1, 1.5, {autoAlpha: 0, ease:Power4.easeInOut});
		new ScrollMagic.Scene({
			triggerElement: $kromtechImg1
		})
			.setTween($kromtechImg1Tween)
			.addTo(mainScrollMagicController);

		// Kromtech image 2 animation
		var $kromtechImg2 = $('.kromtech-robo-container'),
			$kromtechImg2Tween = TweenLite.from($kromtechImg2, 1.5, {autoAlpha: 0, ease:Power4.easeInOut});
		new ScrollMagic.Scene({
			triggerElement: $kromtechImg2
		})
			.setTween($kromtechImg2Tween)
			.addTo(mainScrollMagicController);

		// R&D Logo animation
		var $rAndDLogo = $('.egg-logo'),
			$$rAndDLogoTween = TweenLite.from($rAndDLogo, 1.5, {autoAlpha: 0, ease:Power4.easeInOut});
		new ScrollMagic.Scene({
			triggerElement: $rAndDLogo
		})
			.setTween($$rAndDLogoTween)
			.addTo(mainScrollMagicController);

		// Onset image animation
		var $onsetImg = $('.onset-img-container'),
			$onsetImgTween = TweenLite.from($onsetImg, 1.5, {autoAlpha: 0, ease:Power4.easeInOut});
		new ScrollMagic.Scene({
			triggerElement: $onsetImg
		})
			.setTween($onsetImgTween)
			.addTo(mainScrollMagicController);

		// Onset advent animation
		$('.onset-advent-item').each(function () {
			var $onsetAdventIcon = $(this).find('.onset-item-icon'),
				$onsetAdventInfo = $(this).find('.onset-item-info'),
				$onsetAdventTimeLine = new TimelineLite();

			$onsetAdventTimeLine
				.from($onsetAdventIcon, 0.5, {autoAlpha: 0, ease:Power4.easeInOut})
				.from($onsetAdventIcon, 0.5, {x:'+=50%', ease:Power1.easeInOut})
				.from($onsetAdventInfo, 1, {autoAlpha: 0, ease:Power4.easeInOut}, '-=0.5');

			new ScrollMagic.Scene({
				triggerElement: this
			})
				.setTween($onsetAdventTimeLine)
				.addTo(mainScrollMagicController);
		});

		// Agregator animation
		$('.aggregator-container').each(function () {
			var $aggregatorTitle = $(this).find('.aggregator-title'),
				$aggregatorItem = $(this).find('.aggregator-item'),
				$prevButton = $(this).find('.aggregator-prev-button'),
				$nextButton = $(this).find('.aggregator-next-button'),
				$numbersButton = $(this).find('.aggregator-counter > li'),
				aggregatorTimeLine = new TimelineLite();

			aggregatorTimeLine
				.from($aggregatorTitle, 1, {y:'+=100%', autoAlpha: 0, ease:Power4.easeInOut})
				.addLabel('startAggregatorAnimation', '-=0.7')
				.staggerFrom($aggregatorItem, 1, {y: '+=50px', autoAlpha: 0, ease:Power4.easeInOut}, 0.2, 'startAggregatorAnimation')
				.from($prevButton, 1, {x:'+=100%', autoAlpha: 0, ease:Power4.easeInOut}, 'startAggregatorAnimation+=1')
				.from($nextButton, 1, {x:'-=100%', autoAlpha: 0, ease:Power4.easeInOut}, 'startAggregatorAnimation+=1')
				.staggerFrom($numbersButton, 1, {y: '+=100%', autoAlpha: 0, ease:Power4.easeInOut}, 0.1, 'startAggregatorAnimation+=1');

			new ScrollMagic.Scene({
				triggerElement: this
			})
				.setTween(aggregatorTimeLine)
				.addTo(mainScrollMagicController);
		});

		// Youtube container animation
		$('.youtube-container').each(function () {
			var $youtubePlayer = $(this).find('iframe'),
				youtubeTimeLine = new TimelineLite();

			youtubeTimeLine
				.from($youtubePlayer, 1.5, {y:'+=100%', autoAlpha: 0, ease:Power4.easeInOut});

			new ScrollMagic.Scene({
				triggerElement: this
			})
				.setTween(youtubeTimeLine)
				.addTo(mainScrollMagicController);
		});

		// Egg feature container animation
		var $eggContainer = $('.egg-features-container'),
			$eggTitle = $('.egg-features-title'),
			eggFeatureTimeLine = new TimelineLite();

		eggFeatureTimeLine
			.from($eggContainer, 1, {autoAlpha: 0, ease:Power4.easeInOut})
			.from($eggTitle, 1, {y:'+=100%', autoAlpha: 0, ease:Power4.easeInOut}, '-=0.8');

		new ScrollMagic.Scene({
			triggerElement: $eggContainer
		})
			.setTween(eggFeatureTimeLine)
			.addTo(mainScrollMagicController);

		// Egg quote animation
		var $eggQuoteContainer = $('.egg-quote-container'),
			$eggQuoteText = $('.egg-quote-text'),
			$eggQuoteAuthor = $('.egg-quote-author'),
			$eggQuoteIcon = $('.egg-quote-icon'),
			eggQuoteTimeLine = new TimelineLite();

		eggQuoteTimeLine
			.from($eggQuoteContainer, 1, {autoAlpha: 0, ease:Power4.easeInOut})
			.from($eggQuoteText, 1, {y:'+=100%', autoAlpha: 0, ease:Power4.easeInOut}, '-=0.5')
			.from($eggQuoteAuthor, 1, {autoAlpha: 0, ease:Power4.easeInOut}, '-=0.5')
			.from($eggQuoteIcon, 1, {autoAlpha: 0, ease:Power4.easeInOut}, '-=1');

		new ScrollMagic.Scene({
			triggerElement: $eggQuoteContainer
		})
			.setTween(eggQuoteTimeLine)
			.addTo(mainScrollMagicController);

		// Egg partner animation
		var $eggPartnerContainer = $('.egg-partners-container'),
			$eggPartner = $('.egg-partners-container>a'),
			eggPartnerTimeLine = new TimelineLite();

		eggPartnerTimeLine
			.staggerFrom($eggPartner, 1, {y: '+=50px', autoAlpha: 0, ease:Power4.easeInOut}, 0.1);

		new ScrollMagic.Scene({
			triggerElement: $eggPartnerContainer
		})
			.setTween(eggPartnerTimeLine)
			.addTo(mainScrollMagicController);

		// Jammy title animation
		var $jammyTitleContainer = $('.jammy-info'),
			$jammyLogo = $('.jammy-logo'),
			$jammyTitle = $('.jammy-title'),
			$jammyText = $('.jammy-text'),
			jammyTitleTimeLine = new TimelineLite();

		jammyTitleTimeLine
			.from($jammyLogo, 1, {x:'-=100%', autoAlpha: 0, ease:Power4.easeInOut})
			.from($jammyTitle, 1, {y:'+=100%', autoAlpha: 0, ease:Power4.easeInOut}, '-=0.5')
			.from($jammyText, 1, {y:'+=100%', autoAlpha: 0, ease:Power4.easeInOut}, '-=0.5');

		new ScrollMagic.Scene({
			triggerElement: $jammyTitleContainer
		})
			.setTween(jammyTitleTimeLine)
			.addTo(mainScrollMagicController);

		// Jammy single title animation
		$('.jammy-features-title').each(function () {
			var $titleTrigger = $(this).parent(),
				$jammyFeatureTween = TweenLite.from(this, 1, {y:'+=100%', autoAlpha: 0, ease:Power4.easeInOut});

			new ScrollMagic.Scene({
				triggerElement: $titleTrigger
			})
				.setTween($jammyFeatureTween)
				.addTo(mainScrollMagicController);
		});

		// Jammy banner animation
		var $jammyBanner = $('.indiegogo-link'),
			$jammyBannerTween = TweenLite.from($jammyBanner, 1, {y:'+=100%', autoAlpha: 0, ease:Power4.easeInOut});

		new ScrollMagic.Scene({
			triggerElement: $('.indiegogo-banner')
		})
			.setTween($jammyBannerTween)
			.addTo(mainScrollMagicController);

		// Jammy partners animation
		var $jammyPartnerContainer = $('.jammy-partners-container'),
			$jammyPartner = $('.jammy-partner-link'),
			jammyPartnerTimeLine = new TimelineLite();

		jammyPartnerTimeLine
			.staggerFrom($jammyPartner, 1, {y: '+=50px', autoAlpha: 0, ease:Power4.easeInOut}, 0.1);

		new ScrollMagic.Scene({
			triggerElement: $jammyPartnerContainer
		})
			.setTween(jammyPartnerTimeLine)
			.addTo(mainScrollMagicController);

		//  Novnify key animation
		var $novnifyKeyContainer = $('.novnify-key-container'),
			$novnifyKeyTitle = $('.novnify-stopad-title'),
			$novnifyKeyItems = $('.novnify-stopad-item'),
			novnifyKeyTimeLine = new TimelineLite();

		novnifyKeyTimeLine
			.from($novnifyKeyTitle, 1, {y:'+=100%', autoAlpha: 0, ease:Power4.easeInOut})
			.staggerFrom($novnifyKeyItems, 1, {autoAlpha: 0, ease:Power4.easeInOut}, 0.1, '-=0.5');

		new ScrollMagic.Scene({
			triggerElement: $novnifyKeyContainer
		})
			.setTween(novnifyKeyTimeLine)
			.addTo(mainScrollMagicController);

		//  Novnify circles animation
		var $novnifyCirclesContainer = $('.novnify-circles-container'),
			$novnifyCircles = $('.novnify-circle'),
			$novnifyCirclesText = $('.circle-text'),
			novnifyCirclesTimeLine = new TimelineLite();

		novnifyCirclesTimeLine
			.staggerFrom($novnifyCircles, 1, {autoAlpha: 0, ease:Power4.easeInOut}, 0.2)
			.from($novnifyCirclesText, 1, {autoAlpha: 0, ease:Power4.easeInOut}, '-=0.5');

		new ScrollMagic.Scene({
			triggerElement: $novnifyCirclesContainer
		})
			.setTween(novnifyCirclesTimeLine)
			.addTo(mainScrollMagicController);

		// Zoom image animation
		var $zoomImg = $('.zoom-img-container'),
			$zoomImgTween = TweenLite.from($zoomImg, 1.5, {autoAlpha: 0, ease:Power4.easeInOut});
		new ScrollMagic.Scene({
			triggerElement: $zoomImg
		})
			.setTween($zoomImgTween)
			.addTo(mainScrollMagicController);

		// Zoom customers animation
		var $zoomCustomersTitle = $('.zoom-customers-wrapper').find('.company-info-title'),
			zoomCustomersWrapper = $('.zoom-customers-wrapper'),
			zoomCustomersItem = $('.customers-item'),
			$zoomCustomersPrevButton = $('.zoom-customers-wrapper>.slider-left-arrow'),
			$zoomCustomersNextButton = $('.zoom-customers-wrapper>.slider-right-arrow'),
			zoomCustomersTimeLine = new TimelineLite();

		zoomCustomersTimeLine
			.addLabel('startZoomCustomersAnimation')
			.from($zoomCustomersTitle, 0.5, {y:'+=100%', autoAlpha: 0, ease:Power4.easeInOut}, 'startZoomCustomersAnimation')
			.staggerFrom(zoomCustomersItem, 1, {y: '+=50px', autoAlpha: 0, ease:Power4.easeInOut}, 0.2, 'startZoomCustomersAnimation-=0.5')
			.from($zoomCustomersPrevButton, 1, {x:'-=100%', autoAlpha: 0, ease:Power4.easeInOut}, 'startZoomCustomersAnimation+=1.2')
			.from($zoomCustomersNextButton, 1, {x:'+=100%', autoAlpha: 0, ease:Power4.easeInOut}, 'startZoomCustomersAnimation+=1.2');

		new ScrollMagic.Scene({
			triggerElement: zoomCustomersWrapper
		})
			.setTween(zoomCustomersTimeLine)
			.addTo(mainScrollMagicController);

		// About title animation
		var $aboutTitle = $('.about-title'),
			$aboutSubTitle = $('.about-subtitle'),
			$aboutTitleWrapper = $aboutTitle.parent(),
			aboutTitleTimeLine = new TimelineLite();

		aboutTitleTimeLine
			.from($aboutTitle, 1.5, {y:'+=100px', autoAlpha: 0, ease:Power4.easeInOut})
			.from($aboutSubTitle, 1, {autoAlpha: 0, ease:Power4.easeInOut}, '-=0.5');

		new ScrollMagic.Scene({
			triggerElement: $aboutTitleWrapper
		})
			.setTween(aboutTitleTimeLine)
			.addTo(mainScrollMagicController);

		// Company product animation
		$('.story-item').each(function () {
			var $aboutStoryYear = $(this).find('.story-year'),
				$aboutStoryCircle = $(this).find('.story-sep-circle'),
				$aboutStoryLine = $(this).prev().find('.story-sep-line'),
				$aboutStoryText = $(this).find('.story-text'),
				$aboutStoryButton = $(this).find('.learn-more-button'),
				aboutStoryTimeLine = new TimelineLite();

			aboutStoryTimeLine
				.from($aboutStoryLine, 0.3, {height:0, ease:Power4.easeInOut})
				.from($aboutStoryCircle, 0.2, {scale: 0, ease:Power1.easeInOut}, '-=0.2')
				.from($aboutStoryYear, 0.5, {x:'-=50px', autoAlpha: 0, ease:Power4.easeInOut})
				.from($aboutStoryText, 0.5, {y:'+=50px', autoAlpha: 0, ease:Power4.easeInOut}, '-=0.5')
				.from($aboutStoryButton, 0.5, {y:'+=50px', autoAlpha: 0, ease:Power4.easeInOut}, '-=0.4');

			new ScrollMagic.Scene({
				triggerElement: this
			})
				.setTween(aboutStoryTimeLine)
				.addTo(mainScrollMagicController);
		});

		// Management title animation
		var $managementTitle = $('.management-title'),
			$managementTitleWrapper = $managementTitle.parent(),
			managementTitleTimeLine = new TimelineLite();

		managementTitleTimeLine
			.from($managementTitle, 1, {y:'+=50px', autoAlpha: 0, ease:Power4.easeInOut});

		new ScrollMagic.Scene({
			triggerElement: $managementTitleWrapper
		})
			.setTween(managementTitleTimeLine)
			.addTo(mainScrollMagicController);

		// Management animation
		$('.manager-item').each(function () {
			var $managementImg = $(this).find('.manager-img-container'),
				$managementLinkedIn = $(this).find('.manager-linkedin-link'),
				$managementName = $(this).find('.manager-name'),
				$managementPos = $(this).find('.manager-position'),
				managementTimeLine = new TimelineLite();

			managementTimeLine
				.from($managementImg, 0.5, {autoAlpha: 0, ease:Power4.easeInOut})
				.from($managementName, 0.5, {y:'+=30px', autoAlpha: 0, ease:Power4.easeInOut})
				.from($managementPos, 0.5, {y:'+=30px', autoAlpha: 0, ease:Power4.easeInOut}, '-=0.2')
				.from($managementLinkedIn, 0.4, {scale: 0, ease:Power4.easeInOut}, '-=0.2');

			new ScrollMagic.Scene({
				triggerElement: this
			})
				.setTween(managementTimeLine)
				.addTo(mainScrollMagicController);
		});

		// Partners title animation
		var $partnersTitle = $('.together-title'),
			$partnersTitleWrapper = $partnersTitle.parent(),
			partnersTitleTimeLine = new TimelineLite();

		partnersTitleTimeLine
			.from($partnersTitle, 1.5, {y:'+=100px', autoAlpha: 0, ease:Power4.easeInOut});

		new ScrollMagic.Scene({
			triggerElement: $partnersTitleWrapper
		})
			.setTween(partnersTitleTimeLine)
			.addTo(mainScrollMagicController);

		// Partners animation
		var $partnersItem = $('.partners-item'),
			$partnersWrapper = $partnersItem.parent(),
			partnersTimeLine = new TimelineLite();

		partnersTimeLine
			.staggerFrom($partnersItem, 1, {y: '+=50px', autoAlpha: 0, ease:Power4.easeInOut}, 0.2);

		new ScrollMagic.Scene({
			triggerElement: $partnersWrapper
		})
			.setTween(partnersTimeLine)
			.addTo(mainScrollMagicController);

		// Join title animation
		var $joinTitle = $('.join-title'),
			$joinSubTitle = $('.join-text'),
			$joinTitleWrapper = $joinTitle.parent(),
			joinTitleTimeLine = new TimelineLite();

		joinTitleTimeLine
			.from($joinTitle, 1.5, {y:'+=100px', autoAlpha: 0, ease:Power4.easeInOut})
			.from($joinSubTitle, 1, {autoAlpha: 0, ease:Power4.easeInOut}, '-=0.5');

		new ScrollMagic.Scene({
			triggerElement: $joinTitleWrapper
		})
			.setTween(joinTitleTimeLine)
			.addTo(mainScrollMagicController);

		// Join animation
		var $joinItem = $('.join-item'),
			$joinItemWrapper = $('.join-item').parent(),
			$joinItemPrevButton = $('.join-slider-wrapper>.slider-left-arrow'),
			$joinItemNextButton = $('.join-slider-wrapper>.slider-right-arrow'),
			joinItemTimeLine = new TimelineLite();

		joinItemTimeLine
			.from($joinItem, 1, {y: '+=50px', autoAlpha: 0, ease:Power4.easeInOut})
			.from($joinItemPrevButton, 1, {x:'-=100%', autoAlpha: 0, ease:Power4.easeInOut}, '-=0.2')
			.from($joinItemNextButton, 1, {x:'+=100%', autoAlpha: 0, ease:Power4.easeInOut}, '-=1');

		new ScrollMagic.Scene({
			triggerElement: $joinItemWrapper
		})
			.setTween(joinItemTimeLine)
			.addTo(mainScrollMagicController);

		// Contacts title animation
		var $contactsTitle = $('.contact-title'),
			$contactsTitleWrapper = $contactsTitle.parent(),
			contactsTitleTimeLine = new TimelineLite();

		contactsTitleTimeLine
			.from($contactsTitle, 1, {y:'+=100px', autoAlpha: 0, ease:Power4.easeInOut});

		new ScrollMagic.Scene({
			triggerElement: $contactsTitleWrapper
		})
			.setTween(contactsTitleTimeLine)
			.addTo(mainScrollMagicController);

		// Contact animation
		$('.contact-item').each(function () {
			var $contactName = $(this).find('.contact-item-title'),
				$contactMail = $(this).find('.contact-mail'),
				contactTimeLine = new TimelineLite();

			contactTimeLine
				.from($contactName, 1, {y:'+=60px', autoAlpha: 0, ease:Power4.easeInOut})
				.from($contactMail, 0.5, {autoAlpha: 0, ease:Power4.easeInOut});

			new ScrollMagic.Scene({
				triggerElement: this
			})
				.setTween(contactTimeLine)
				.addTo(mainScrollMagicController);
		});

		// Contact social animation
		var $contactSocialContainer = $('.contact-social-list'),
			$contactSocialItem = $contactSocialContainer.find('.social-item'),
			contactSocialTimeLine = new TimelineLite();

		contactSocialTimeLine
			.staggerFrom($contactSocialItem, 1, {y: '+=30px', autoAlpha: 0, ease:Power4.easeInOut}, 0.15);

		new ScrollMagic.Scene({
			triggerElement: $contactSocialContainer
		})
			.setTween(contactSocialTimeLine)
			.addTo(mainScrollMagicController);

		// Footer animation
		var $footerLogo = $('.footer-logo-container'),
			$footerCopy = $('.footer-copy'),
			$footerSubCopy = $('.footer-subcopy'),
			footerTimeLine = new TimelineLite();

		footerTimeLine
			.from($footerLogo, 1, {rotation: 190, autoAlpha: 0, ease:Power4.easeInOut})
			.from($footerCopy, 1, {y:'+=100%', autoAlpha: 0, ease:Power4.easeInOut}, '-=0.5')
			.from($footerSubCopy, 1, {y:'+=100%', autoAlpha: 0, ease:Power4.easeInOut}, '-=0.5');

		new ScrollMagic.Scene({
			triggerElement: $('.footer-section')
		})
			.setTween(footerTimeLine)
			.addTo(mainScrollMagicController);

	}


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
	// (function($) {
	// 	$.fn.animated = function(inEffect, oSet) {
	// 		$(this).css("opacity", "0").addClass("animated");
	//
	// 		$(this).waypoint(function(direction) {
	// 			if (direction === "down") {
	// 				$(this.element).addClass(inEffect).css("opacity", "1")
	// 			}
	// 		}, {
	// 			offset: oSet
	// 		});
	// 	};
	// })(jQuery);

	// $('.why-container').animated('fadeIn', '80%');
	// $('.backtotop-button').animated('fadeInRight', '80%');
	// $('.why-text').animated('fadeIn', '80%');
	// $('.how-title').animated('fadeIn', '80%');
	// $('.how-slider-wrapper').animated('fadeIn', '80%');
	// $('.how-text-wrap').animated('fadeIn', '80%');
	// $('.learn-more-button').animated('fadeInUp', '80%');
	// $('.zeo-university-img-container').animated('fadeIn', '80%');
	// $('.zeo-university-header').animated('fadeIn', '80%');
	// $('.zeo-university-text').animated('fadeIn', '80%');
	// $('.company-logo-container').animated('fadeInLeft', '80%');
	// $('.company-aside').animated('fadeInLeft', '80%');
	// $('.company-info-title').animated('fadeIn', '80%');
	// $('.company-info-text').animated('fadeIn', '80%');
	// $('.company-advent-item').animated('fadeIn', '80%');
	// $('.kromtech-robo-container').animated('fadeIn', '80%');
	// $('.kromtech-bg-robo').animated('fadeIn', '80%');
	// $('.company-products-list').animated('fadeIn', '80%');
	// $('.kromtech-partners-item').animated('fadeIn', '80%');
	// $('.aggregator-container').animated('fadeIn', '80%');
	// $('.onset-img-container').animated('fadeIn', '80%');
	// $('.onset-advent-list').animated('fadeIn', '80%');
	// $('.egg-logo').animated('fadeIn', '80%');
	// $('.youtube-container').animated('fadeIn', '80%');
	// $('.egg-features-container').animated('fadeIn', '80%');
	// $('.egg-quote-container').animated('fadeIn', '80%');
	// $('.egg-partners-container').animated('fadeIn', '80%');
	// $('.jammy-info').animated('fadeIn', '80%');
	// $('.jammy-features-title').animated('fadeIn', '80%');
	// $('.indiegogo-banner').animated('fadeIn', '80%');
	// $('.jammy-partners-container').animated('fadeIn', '80%');
	// $('.novnify-key-container').animated('fadeIn', '80%');
	// $('.novnify-circles-container').animated('fadeIn', '80%');
	// $('.zoom-img-container').animated('fadeIn', '80%');
	// $('.zoom-customers-wrapper').animated('fadeIn', '80%');
	// $('.about-title').animated('fadeIn', '80%');
	// $('.about-subtitle').animated('fadeIn', '80%');
	// $('.story-year').animated('fadeIn', '80%');
	// $('.story-sep-circle').animated('zoomIn', '80%');
	// $('.story-text').animated('fadeIn', '80%');
	// $('.management-title').animated('fadeIn', '80%');
	// $('.manager-item').animated('fadeIn', '80%');
	// $('.together-title').animated('fadeIn', '80%');
	// $('.partners-list').animated('fadeIn', '80%');
	// $('.join-title').animated('fadeIn', '80%');
	// $('.join-text').animated('fadeIn', '80%');
	// $('.join-slider-wrapper').animated('fadeIn', '80%');
	// $('.contact-title').animated('fadeIn', '80%');
	// $('.contact-list').animated('fadeIn', '80%');
	// $('.contact-social-list').animated('fadeInUp', '80%');
	// $('.footer-container').animated('fadeIn', '80%');

});

// Youtube pause on scroll
// var player1;
// var player2;
//
// function onYouTubePlayerAPIReady() {
// 	player1 = new YT.Player('player1', {
// 		events: {'onReady': onPlayerReady1}
// 	});
// 	player2 = new YT.Player('player2', {
// 		events: {'onReady': onPlayerReady2}
// 	});
// }
// function onPlayerReady1(event) {
// 	waypointYoutube1();
// }
//
// function onPlayerReady2(event) {
// 	waypointYoutube2();
// }
//
//
// function waypointYoutube1() {
// 	$('#player1').waypoint(function() {
// 		player1.pauseVideo();
// 	}, {
// 		offset: function() {
// 			return -this.element.clientHeight
// 		}
// 	});
// }
//
// function waypointYoutube2() {
// 	$('#player2').waypoint(function() {
// 		player2.pauseVideo();
// 	}, {
// 		offset: function() {
// 			return -this.element.clientHeight
// 		}
// 	});
// }