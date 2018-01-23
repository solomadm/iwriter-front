/* ----------------- Start JS Document ----------------- */

// Page Loader
$(window).load(function () {
    "use strict";    
	$('#loader').fadeOut();
});

$(document).ready(function ($) {
	"use strict";	
	////	Hidder Header	
	var headerEle = function () {
		var $headerHeight = $('header').height();
		$('.hidden-header').css({ 'height' : $headerHeight  + "px" });
	};
	
	$(window).load(function () {
	    headerEle();
	});
	
	$(window).resize(function () {
	    headerEle();
	});
	
    
    /*---------------------------------------------------*/
    /* Progress Bar
    /*---------------------------------------------------*/    
    $('.skill-shortcode').appear(function() {
  		$('.progress').each(function(){ 
    		$('.progress-bar').css('width',  function(){ 
    			return ($(this).attr('data-percentage')+'%')});
  		});
	},{accY: -100});	
	
	
    /*--------------------------------------------------*/
    /* Counter
    /*--------------------------------------------------*/   
        
    $('.timer').countTo();
    $('.counter-item').appear(function() {
        $('.timer').countTo();
    },{
    	accY: -100
    });

		
	/*----------------------------------------------------*/
	/*	Nav Menu & Search
	/*----------------------------------------------------*/
	
	$(".nav > li:has(ul)").addClass("drop");
	$(".nav > li.drop > ul").addClass("dropdown");
	$(".nav > li.drop > ul.dropdown ul").addClass("sup-dropdown");
	
	$('.show-search').click(function() {
		$('.search-form').fadeIn(300);
		$('.search-form input').focus();
	});
	$('.search-form input').blur(function() {
		$('.search-form').fadeOut(300);
	});
				
	/*----------------------------------------------------*/
	/*	Back Top Link
	/*----------------------------------------------------*/
	
    var offset = 200;
    var duration = 500;
    $(window).scroll(function() {
        if ($(this).scrollTop() > offset) {
            $('.back-to-top').fadeIn(400);
        } else {
            $('.back-to-top').fadeOut(400);
        }
    });
    $('.back-to-top').click(function(event) {
        event.preventDefault();
        $('html, body').animate({scrollTop: 0}, 600);
        return false;
    })
		
	/*----------------------------------------------------*/
	/*	Sliders & Carousel
	/*----------------------------------------------------*/
	
	////------- Touch Slider
	var time = 4.4,
		$progressBar,
		$bar,
		$elem,
		isPause,
		tick,
		percentTime;
	$('.touch-slider').each(function(){
		var owl = jQuery(this),
			sliderNav = $(this).attr('data-slider-navigation'),
			sliderPag = $(this).attr('data-slider-pagination'),
			sliderProgressBar = $(this).attr('data-slider-progress-bar');
			
		if ( sliderNav == 'false' || sliderNav == '0' ) {
			var returnSliderNav = false
		}else {
			var returnSliderNav = true
		}
		
		if ( sliderPag == 'true' || sliderPag == '1' ) {
			var returnSliderPag = true
		}else {
			var returnSliderPag = false
		}
		
		if ( sliderProgressBar == 'true' || sliderProgressBar == '1' ) {
			var returnSliderProgressBar = progressBar
			var returnAutoPlay = false
		}else {
			var returnSliderProgressBar = false
			var returnAutoPlay = true
		}
		
		owl.owlCarousel({
			navigation : returnSliderNav,
			pagination: returnSliderPag,
			slideSpeed : 400,
			paginationSpeed : 400,
			lazyLoad : true,
			singleItem: true,
			autoHeight : true,
			autoPlay: returnAutoPlay,
			stopOnHover: returnAutoPlay,
			transitionStyle : "fade",
			afterInit : returnSliderProgressBar,
			startDragging : pauseOnDragging
		});
		
	});

    function progressBar(elem){
		$elem = elem;
		buildProgressBar();
		start();
    }
	
    function buildProgressBar(){
		$progressBar = $("<div>",{
			id:"progressBar"
		});
		$bar = $("<div>",{
			id:"bar"
		});
		$progressBar.append($bar).prependTo($elem);
    }
	
    function pauseOnDragging(){
      isPause = true;
    }
	
	////------- Projects Carousel
	$(".projects-carousel").owlCarousel({
		navigation : true,
		pagination: false,
		slideSpeed : 400,
		stopOnHover: true,
    	autoPlay: 3000,
    	items : 4,
    	itemsDesktopSmall : [900,3],
		itemsTablet: [600,2],
		itemsMobile : [479, 1]
	});
	
	
	
	////------- Testimonials Carousel
	$(".testimonials-carousel").owlCarousel({
		navigation : true,
		pagination: false,
		slideSpeed : 2500,
		stopOnHover: true,
    	autoPlay: 3000,
    	singleItem:true,
		autoHeight : true,
		transitionStyle : "fade"
	});
	
	
	
	
	
	
	////------- Custom Carousel
	$('.custom-carousel').each(function(){
		var owl = jQuery(this),
			itemsNum = $(this).attr('data-appeared-items'),
			sliderNavigation = $(this).attr('data-navigation');
			
		if ( sliderNavigation == 'false' || sliderNavigation == '0' ) {
			var returnSliderNavigation = false
		}else {
			var returnSliderNavigation = true
		}
		if( itemsNum == 1) {
			var deskitemsNum = 1;
			var desksmallitemsNum = 1;
			var tabletitemsNum = 1;
		} 
		else if (itemsNum >= 2 && itemsNum < 4) {
			var deskitemsNum = itemsNum;
			var desksmallitemsNum = itemsNum - 1;
			var tabletitemsNum = itemsNum - 1;
		} 
		else if (itemsNum >= 4 && itemsNum < 8) {
			var deskitemsNum = itemsNum -1;
			var desksmallitemsNum = itemsNum - 2;
			var tabletitemsNum = itemsNum - 3;
		} 
		else {
			var deskitemsNum = itemsNum -3;
			var desksmallitemsNum = itemsNum - 6;
			var tabletitemsNum = itemsNum - 8;
		}
		owl.owlCarousel({
			slideSpeed : 300,
			stopOnHover: true,
			autoPlay: false,
			navigation : returnSliderNavigation,
			pagination: false,
			lazyLoad : true,
			items : itemsNum,
			itemsDesktop : [1000,deskitemsNum],
			itemsDesktopSmall : [900,desksmallitemsNum],
			itemsTablet: [600,tabletitemsNum],
			itemsMobile : false,
			transitionStyle : "goDown",
		});
	});
	
    
    
    ////------- Testimonials Carousel
	$(".fullwidth-projects-carousel").owlCarousel({
		navigation : false,
		pagination: false,
		slideSpeed : 400,
		stopOnHover: true,
    	autoPlay: 3000,
    	items : 5,
    	itemsDesktopSmall : [900,3],
		itemsTablet: [600,2],
		itemsMobile : [479, 1]
	});
	
	
	
	
	/*----------------------------------------------------*/
	/*	Tabs
	/*----------------------------------------------------*/
	
	$('#myTab a').click(function (e) {
		e.preventDefault()
		$(this).tab('show')
	})
	
	
	
	
	/*----------------------------------------------------*/
	/*	Css3 Transition
	/*----------------------------------------------------*/
	
	$('*').each(function(){
		if($(this).attr('data-animation')) {
			var $animationName = $(this).attr('data-animation'),
				$animationDelay = "delay-"+$(this).attr('data-animation-delay');
			$(this).appear(function() {
				$(this).addClass('animated').addClass($animationName);
				$(this).addClass('animated').addClass($animationDelay);
			});
		}
	});
	
	
	
	
	/*----------------------------------------------------*/
	/*	Pie Charts
	/*----------------------------------------------------*/
	
	var pieChartClass = 'pieChart',
        pieChartLoadedClass = 'pie-chart-loaded';
		
	function initPieCharts() {
		var chart = $('.' + pieChartClass);
		chart.each(function() {
			$(this).appear(function() {
				var $this = $(this),
					chartBarColor = ($this.data('bar-color')) ? $this.data('bar-color') : "#F54F36",
					chartBarWidth = ($this.data('bar-width')) ? ($this.data('bar-width')) : 150
				if( !$this.hasClass(pieChartLoadedClass) ) {
					$this.easyPieChart({
						animate: 2000,
						size: chartBarWidth,
						lineWidth: 2,
						scaleColor: false,
						trackColor: "#eee",
						barColor: chartBarColor,
					}).addClass(pieChartLoadedClass);
				}
			});
		});
	}
	initPieCharts();
	
	
	
	
	
	/*----------------------------------------------------*/
	/*	Animation Progress Bars
	/*----------------------------------------------------*/
	
	$("[data-progress-animation]").each(function() {
		
		var $this = $(this);
		
		$this.appear(function() {
			
			var delay = ($this.attr("data-appear-animation-delay") ? $this.attr("data-appear-animation-delay") : 1);
			
			if(delay > 1) $this.css("animation-delay", delay + "ms");
			
			setTimeout(function() { $this.animate({width: $this.attr("data-progress-animation")}, 800);}, delay);

		}, {accX: 0, accY: -50});

	});
	
	
	
	
	
	/*----------------------------------------------------*/
	/*	Milestone Counter
	/*----------------------------------------------------*/
	
	jQuery('.milestone-block').each(function() {
		jQuery(this).appear(function() {
			var $endNum = parseInt(jQuery(this).find('.milestone-number').text());
			jQuery(this).find('.milestone-number').countTo({
				from: 0,
				to: $endNum,
				speed: 4000,
				refreshInterval: 60,
			});
		},{accX: 0, accY: 0});
	});
	
	
	
	
	
	/*----------------------------------------------------*/
	/*	Nivo Lightbox
	/*----------------------------------------------------*/
	
	$('.lightbox').nivoLightbox({
		effect: 'fadeScale',
		keyboardNav: true,
		errorMessage: 'The requested content cannot be loaded. Please try again later.'
	});
	
	
	
	
	
	/*----------------------------------------------------*/
	/*	Change Slider Nav Icons
	/*----------------------------------------------------*/
	
	$('.touch-slider').find('.owl-prev').html('<i class="fa fa-angle-left"></i>');
	$('.touch-slider').find('.owl-next').html('<i class="fa fa-angle-right"></i>');
	$('.touch-carousel, .testimonials-carousel').find('.owl-prev').html('<i class="fa fa-angle-left"></i>');
	$('.touch-carousel, .testimonials-carousel').find('.owl-next').html('<i class="fa fa-angle-right"></i>');
	$('.read-more').append('<i class="fa fa-angle-right"></i>');
	
	
	
	
	/*----------------------------------------------------*/
	/*	Tooltips & Fit Vids & Parallax & Text Animations
	/*----------------------------------------------------*/
	
	$("body").fitVids();
	
	$('.itl-tooltip').tooltip();
	
	$('.bg-parallax').each(function() {
		$(this).parallax("30%", 0.2);
	});
	
	$('.tlt').textillate({
		loop: true,
		in: {
			effect: 'fadeInUp',
			delayScale: 2,
			delay: 50,
			sync: false,
			shuffle: false,
			reverse: true,
		},
		out: {
			effect: 'fadeOutUp',
			delayScale: 2,
			delay: 50,
			sync: false,
			shuffle: false,
			reverse: true,
		},
	});

});




/*----------------------------------------------------*/
/*	Portfolio Isotope
/*----------------------------------------------------*/

jQuery(window).load(function(){
	
	var $container = $('#portfolio');
	$container.isotope({
		layoutMode : 'masonry',
		filter: '*',
		animationOptions: {
			duration: 750,
			easing: 'linear',
			queue: false,
		}
	});

	$('.portfolio-filter ul a').click(function(){
		var selector = $(this).attr('data-filter');
		$container.isotope({
			filter: selector,
			animationOptions: {
				duration: 750,
				easing: 'linear',
				queue: false,
			}
		});
	  return false;
	});

	var $optionSets = $('.portfolio-filter ul'),
	    $optionLinks = $optionSets.find('a');
	$optionLinks.click(function(){
		var $this = $(this);
		if ( $this.hasClass('selected') ) { return false; }
		var $optionSet = $this.parents('.portfolio-filter ul');
		$optionSet.find('.selected').removeClass('selected');
		$this.addClass('selected'); 
	});
	
});
/* ----------------- End JS Document ----------------- */








// Styles Switcher JS
function setActiveStyleSheet(title) {
  var i, a, main;
  for(i=0; (a = document.getElementsByTagName("link")[i]); i++) {
    if(a.getAttribute("rel").indexOf("style") != -1 && a.getAttribute("title")) {
      a.disabled = true;
      if(a.getAttribute("title") == title) a.disabled = false;
    }
  }
}

function getActiveStyleSheet() {
  var i, a;
  for(i=0; (a = document.getElementsByTagName("link")[i]); i++) {
    if(a.getAttribute("rel").indexOf("style") != -1 && a.getAttribute("title") && !a.disabled) return a.getAttribute("title");
  }
  return null;
}

function getPreferredStyleSheet() {
  var i, a;
  for(i=0; (a = document.getElementsByTagName("link")[i]); i++) {
    if(a.getAttribute("rel").indexOf("style") != -1
       && a.getAttribute("rel").indexOf("alt") == -1
       && a.getAttribute("title")
       ) return a.getAttribute("title");
  }
  return null;
}

function createCookie(name,value,days) {
  if (days) {
    var date = new Date();
    date.setTime(date.getTime()+(days*24*60*60*1000));
    var expires = "; expires="+date.toGMTString();
  }
  else expires = "";
  document.cookie = name+"="+value+expires+"; path=/";
}

function readCookie(name) {
  var nameEQ = name + "=";
  var ca = document.cookie.split(';');
  for(var i=0;i < ca.length;i++) {
    var c = ca[i];
    while (c.charAt(0)==' ') c = c.substring(1,c.length);
    if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length,c.length);
  }
  return null;
}

window.onload = function(e) {
  var cookie = readCookie("style");
  var title = cookie ? cookie : getPreferredStyleSheet();
  setActiveStyleSheet(title);
}

window.onunload = function(e) {
  var title = getActiveStyleSheet();
  createCookie("style", title, 365);
}

var cookie = readCookie("style");
var title = cookie ? cookie : getPreferredStyleSheet();
setActiveStyleSheet(title);



$(document).ready(function(){
	
	// Styles Switcher
	$(document).ready(function(){
		$('.open-switcher').click(function(){
			if($(this).hasClass('show-switcher')) {
				$('.switcher-box').css({'left': 0});
				$('.open-switcher').removeClass('show-switcher');
				$('.open-switcher').addClass('hide-switcher');
			}else if(jQuery(this).hasClass('hide-switcher')) {
				$('.switcher-box').css({'left': '-212px'});
				$('.open-switcher').removeClass('hide-switcher');
				$('.open-switcher').addClass('show-switcher');
			}
		});
	});
	
	//Top Bar Switcher
	$(".topbar-style").change(function(){
		if( $(this).val() == 1){
			$(".top-bar").removeClass("dark-bar"),
			$(".top-bar").removeClass("color-bar"),
			$(window).resize();
		} else if( $(this).val() == 2){
			$(".top-bar").removeClass("color-bar"),
			$(".top-bar").addClass("dark-bar"),
			$(window).resize();
		} else if( $(this).val() == 3){
			$(".top-bar").removeClass("dark-bar"),
			$(".top-bar").addClass("color-bar"),
			$(window).resize();
		}
	});
	
	//Layout Switcher
	$(".layout-style").change(function(){
		if( $(this).val() == 1){
			$("#container").removeClass("boxed-page"),
			$(window).resize();
		} else{
			$("#container").addClass("boxed-page"),
			$(window).resize();
		}
	});
	
	//Background Switcher
	$('.switcher-box .bg-list li a').click(function() {
		var current = $('.switcher-box select[id=layout-style]').find('option:selected').val();
		if(current == '2') {
			var bg = $(this).css("backgroundImage");
			$("body").css("backgroundImage",bg);
		} else {
			alert('Please select boxed layout');
		}
	});

	//slick slider on home page RECENT WORKS
	$(document).ready(function(){
		$('.recent-work-slider').slick({
			infinite: true,
			slidesToShow: 5,
			slidesToScroll: 1,
			prevArrow: $('.arrow-slide-prev'),
			nextArrow: $('.arrow-slide-next'),
			responsive: [
				{
					breakpoint: 1024,
					settings: {
						slidesToShow: 3,
						slidesToScroll: 1,
						infinite: true,
					}
				},
				{
					breakpoint: 600,
					settings: {
						slidesToShow: 2,
						slidesToScroll: 2
					}
				},
				{
					breakpoint: 480,
					settings: {
						slidesToShow: 1,
						slidesToScroll: 1
					}
				}
			]
		});
	});

	$('#my-clients-slider').slick({
		infinite: true,
		slidesToShow: 3,
		slidesToScroll: 1,
		prevArrow: $('.arrow-slide-prev'),
		nextArrow: $('.arrow-slide-next'),
		responsive: [
			{
				breakpoint: 1024,
				settings: {
					slidesToShow: 3,
					slidesToScroll: 1,
					infinite: true,
				}
			},
			{
				breakpoint: 600,
				settings: {
					slidesToShow: 2,
					slidesToScroll: 2
				}
			},
			{
				breakpoint: 480,
				settings: {
					slidesToShow: 1,
					slidesToScroll: 1
				}
			}
		]
	});

	$('.text-input').on('focus',
		function(){
			$(this).removeClass('has-error');
		}
	)

	//Synchronizing clicks and hovers for bubble menu on pricing page
	hoverBubbleMenu('.a-img', '.a-text');
	hoverBubbleMenu('.a-text','.a-img');

	clickingBubbleMenu('.a-img', '.a-text');
	clickingBubbleMenu('.a-text','.a-img');

	updatePriceBlocks('.a-img');
	updatePriceBlocks('.a-text');

	//Watch for 'coin' and profile links
	watchNavLinkClicked('authorized-link');

});


/**
 * Watch navigation link to be clicked
 */
function watchNavLinkClicked(identifier){
	$('li.'+identifier).on('click',function(e){
		e.stopPropagation();
		$(this).addClass('clicked');
	});

	$('li.'+identifier+' a').on('click',function(e){
		e.stopPropagation();
		$('li.'+identifier).toggleClass('clicked');
	});

	$(document).on('click', function(){
		$('li.'+identifier).removeClass('clicked');
	})
}



/**
 * Slick Nav 
 */

$('.wpb-mobile-menu').slicknav({
  prependTo: '.navbar-header',
  parentTag: 'margo',
  allowParentLinks: true,
  duplicate: false,
  label: '',
  closedSymbol: '<i class="fa fa-angle-right"></i>',
  openedSymbol: '<i class="fa fa-angle-down"></i>',
});


/**
* Custom Functions
*/

//Update Price blocks on pricing page
function updatePriceBlocks(selector){
	$(selector).click(function(){
		var workType = $(this).data('type');
		$('.pricing-table li strong')
			.fadeOut(0, changeListPrices(workTypePrices, workType))
			.fadeIn(800);
	});
}

//Manage styles on hovering bubbles on pricing page
function hoverBubbleMenu(mainSelector, secondSelector){
	$(mainSelector).hover(
		function(){
			if(!$(this).hasClass('active')){
				var typeValue = $(this).data('type');
				$(secondSelector+'.'+typeValue).addClass('active added-active');
			}
		},
		function () {
			if(!$(this).hasClass('active')) {
				var typeValue = $(this).data('type');
				$(secondSelector + '.' + typeValue).removeClass('active added-active');
			}
		}
	);
}

//Manage styles on clicking bubbles on pricing page
function clickingBubbleMenu(mainSelector, secondSelector){
	$(mainSelector).click(function(){
		$('table.bubble-menu a').removeClass('active');
		$('.narrow-bubble-navigation a').removeClass('active');
		var typeValue = $(this).data('type');
		$(this).addClass('active');
		$("[data-type="+typeValue+"]").addClass('active');
		$(secondSelector+'.'+typeValue).addClass('active');
	});
}

// update price blocks by click on a bubble on pricing page
function changeListPrices(workTypePrices, workType){
	var currentPricePlan = workTypePrices[workType];
	var planNames = getPricePlanNames(currentPricePlan);

	for(var i=0; i<planNames.length; i++){

		var priceNames = getPriceNames(planNames[i], currentPricePlan);

		for(var k=0; k<priceNames.length; k++){
			var priceVal = workTypePrices[workType][planNames[i]][priceNames[k]];
			$("[data-plan-type = "+planNames[i]+"] strong."+priceNames[k]).text("$"+priceVal);
		}
	}

}

//used for changeListPrices()
function getPricePlanNames(currentPricePlan){
	var planNames = [];
	for (var planName in currentPricePlan){
		planNames.push(planName);
	}
	return planNames;
}

//used for changeListPrices()
function getPriceNames(planName, currentPricePlan){
	var prices = [];
	for (var price in currentPricePlan[planName]){
		prices.push(price);
	}
	return prices;
}


/*
* Hardcoded part. THIS DATA MUST BE PULLED from the DB when new design goes live.
*/

//Price data for pricing page.
var workTypePrices = {
	'a-articles' : {
		'standard': {
			'w150': 1.5,
			'w300': 2.75,
			'w400': 4,
			'w500': 5.5,
			'w700': 7.5,
			'w1000': 10.1
		},
		'premium': {
			'w150': 2.5,
			'w300': 3.75,
			'w400': 5,
			'w500': 6.5,
			'w700': 8.5,
			'w1000': 11.1
		},
		'elite': {
			'w150': 3.5,
			'w300': 4.75,
			'w400': 6,
			'w500': 7.5,
			'w700': 9.5,
			'w1000': 12.1
		},
		'elitePlus': {
			'w150': 4.5,
			'w300': 5.75,
			'w400': 7,
			'w500': 8.5,
			'w700': 10,
			'w1000': 15.1
		}
	},
	'a-rewrites' : {
		'standard': {
			'w150': 1.8,
			'w300': 2.78,
			'w400': 4,
			'w500': 5.8,
			'w700': 7.8,
			'w1000': 10.2
		},
		'premium': {
			'w150': 2.8,
			'w300': 3.78,
			'w400': 8,
			'w500': 6.8,
			'w700': 8.8,
			'w1000': 11.2
		},
		'elite': {
			'w150': 3.8,
			'w300': 4.78,
			'w400': 6,
			'w500': 7.8,
			'w700': 9.8,
			'w1000': 12.2
		},
		'elitePlus': {
			'w150': 4.8,
			'w300': 5.78,
			'w400': 7,
			'w500': 8.8,
			'w700': 10,
			'w1000': 15.2
		}
	},
	'a-blog-posts' : {
		'standard': {
			'w150': 1.9,
			'w300': 2.79,
			'w400': 4,
			'w500': 5.9,
			'w700': 7.9,
			'w1000': 10.3
		},
		'premium': {
			'w150': 2.9,
			'w300': 3.79,
			'w400': 9,
			'w500': 6.9,
			'w700': 8.9,
			'w1000': 11.3
		},
		'elite': {
			'w150': 3.9,
			'w300': 4.79,
			'w400': 6,
			'w500': 7.9,
			'w700': 9.9,
			'w1000': 12.3
		},
		'elitePlus': {
			'w150': 4.9,
			'w300': 5.79,
			'w400': 7,
			'w500': 8.9,
			'w700': 10,
			'w1000': 15.3
		}
	},
	'a-press-release' : {
		'standard': {
			'w150': 1.2,
			'w300': 2.72,
			'w400': 4,
			'w500': 5.2,
			'w700': 7.2,
			'w1000': 10.4
		},
		'premium': {
			'w150': 2.2,
			'w300': 3.72,
			'w400': 2,
			'w500': 6.2,
			'w700': 8.2,
			'w1000': 11.4
		},
		'elite': {
			'w150': 3.2,
			'w300': 4.72,
			'w400': 6,
			'w500': 7.2,
			'w700': 9.2,
			'w1000': 12
		},
		'elitePlus': {
			'w150': 4.2,
			'w300': 5.72,
			'w400': 7,
			'w500': 8.2,
			'w700': 10,
			'w1000': 15.4
		}
	},
	'a-ebooks' : {
		'standard': {
			'w150': 10,
			'w300': 20,
			'w400': 40,
			'w500': 50,
			'w700': 70,
			'w1000': 100
		},
		'premium': {
			'w150': 20,
			'w300': 30,
			'w400': 50,
			'w500': 60,
			'w700': 80,
			'w1000': 110
		},
		'elite': {
			'w150': 30,
			'w300': 40,
			'w400': 60,
			'w500': 70,
			'w700': 90,
			'w1000': 120
		},
		'elitePlus': {
			'w150': 40,
			'w300': 50,
			'w400': 70,
			'w500': 80,
			'w700': 100,
			'w1000': 150
		}
	},
	'a-kindles' : {
		'standard': {
			'w150': 15,
			'w300': 25,
			'w400': 40,
			'w500': 55,
			'w700': 75,
			'w1000': 10
		},
		'premium': {
			'w150': 25,
			'w300': 35,
			'w400': 50,
			'w500': 65,
			'w700': 85,
			'w1000': 101
		},
		'elite': {
			'w150': 35,
			'w300': 45,
			'w400': 6,
			'w500': 75,
			'w700': 95,
			'w1000': 102
		},
		'elitePlus': {
			'w150': 45,
			'w300': 55,
			'w400': 70,
			'w500': 85,
			'w700': 100,
			'w1000': 150
		}
	}
};
