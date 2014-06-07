// JavaScript Document
// David Archuleta Jr

jQuery(document).ready(function($) {
   'use strict';

	// var windowHeight = $(window).height();
	// var windowWidth = $(window).width();

	// Nav
	/*
	$('a[href*=#]:not([href=#])').click(function() {
	    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
	      var target = $(this.hash);
	      target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
	      if (target.length) {
	        $('html,body').animate({
	          scrollTop: target.offset().top
	        }, 500);
	        return false;
	      }
	    }
	});
	*/
	// automatically scrolls to section of page upon click event.
	$(document).ready(function() {
		$("a[href*=#]:not([href=#])").on("click", function(event){
			$("html, body").animate({
				scrollTop: $($(this).attr("href")).offset().top + "px"
			}, {
				duration: 500,
				easing: "swing"
			});
			return false;
		});
	});
	// It works!!!
	
	// show hidden menu, change menu icon upon click and vice versa
    $(".menu-icon").click(function(e) {
    	if ($('.menu').hasClass("visuallyhidden")) {
			$('.menu').removeClass("visuallyhidden");
			$('.menu-icon').addClass("close");
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
	// Nav

	// Shows the overlay for the 'my works' section upon hover
	$(".work-item").hover(function(e){
		$(this).children('.work-item-inside').addClass("visuallyshowed");
	}, function(){ 
		$(this).children('.work-item-inside').removeClass("visuallyshowed");
	});

	// Skrollr Â· Mobile NONE
	if(!(/Android|iPhone|iPad|iPod|BlackBerry|Windows Phone/i).test(navigator.userAgent || navigator.vendor || window.opera)){
		// only animate when scrolling down
	    skrollr.init({
			beforerender: function(data) {
				return data.curTop > data.lastTop;
			}        
        	
	    });
	}
	// Skrollr

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
	// ignore.. this is a test
	//$( "body" ).prepend( "<div>" + $( window ).width() + "</div>");
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