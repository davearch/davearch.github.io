// JavaScript Document
// David Archuleta Jr

jQuery(document).ready(function($) {
   'use strict';
	// menu links automatically scroll to section of page upon click event.
	$("a[href*=#]:not([href=#])").on("click", function(event){
		$("html, body").animate({
			scrollTop: $($(this).attr("href")).offset().top + "px"
		}, {
			duration: 500,
			easing: "swing"
		});
		return false;
	});
	
	// show hidden menu, change menu icon upon click and vice versa
        $(".menu-icon").click(function(e) {
    		if ($('.menu').hasClass("visuallyhidden")) { 		// main.css line 238
			$('.menu').removeClass("visuallyhidden");
			$('.menu-icon').addClass("close");		// main.css line 338-385
		} else {
			$('.menu').addClass("visuallyhidden");
			$('.menu-icon').removeClass("close");
		}
    	});
	
	// dynamically show and hide menu && change menu icon upon clicking link
    	$(".menu li a").click(function(e) {
    		if ($('.menu').hasClass("visuallyhidden")) {
			$('.menu').removeClass("visuallyhidden");
			$('.menu-icon').addClass("close");
		} else {
			$('.menu').addClass("visuallyhidden");
			$('.menu-icon').removeClass("close");
		}
    	});

	// Hovering over the menu icon changes it's color darker or lighter
	$(".menu-icon").hover(
		function() {
			$(this).children("span").removeClass("background");
			$(this).children("span").addClass("dark-background");
		}, function() {
			$(this).children("span").removeClass("dark-background");
			$(this).children("span").addClass("background");
		}
	);

	// Shows the overlay for the 'my works' section upon hover
	$(".work-item").hover(function(e){
		$(this).children('.work-item-inside').addClass("visuallyshowed");
	}, function(){ 
		$(this).children('.work-item-inside').removeClass("visuallyshowed");
	});

	// Skrollr Mobile NONE
	if(!(/Android|iPhone|iPad|iPod|BlackBerry|Windows Phone/i).test(navigator.userAgent || navigator.vendor || window.opera)){
		// only animate when scrolling down
	    	skrollr.init({
			beforerender: function(data) {
				return data.curTop > data.lastTop;
			}        
        	
	    	});
	}
});

// match css sizes (width, height) with viewport upon page load
$(window).load(function() {

	fixSizes();
	$(".loader").delay(500).fadeOut('slow');
	$("body").css("overflow", "auto");
	$(".home-title").removeClass("opacity-none");
	$(".menu-icon").removeClass("opacity-none");
	
});

// match css sizes with viewport upon change of viewport size
$(window).resize(function() {
	fixSizes();
});

function fixSizes() {

	var windowHeight = $(window).height();
	var windowWidth = $(window).width();

	$("#home").css('height', windowHeight);
	$(".home-title").each(function() {
		$(this).css('padding-top', ($(this).parent().height() - $(this).height()) / 2);
	});
	$(".work-item-inside-content").each(function() {
		$(this).css('margin-top', ($(this).parent().height() - $(this).height()) / 2);
	});
}
