$(document).ready(function() {
	
//#################### Hamburger Menu Icon

	
	if ($(".navicon").length > 0) {
	
		$('.navicon').on('click', function (e) {
		  e.preventDefault();
		  $(this).toggleClass('navicon--active');
		  
		  if( $(".main").hasClass('nav_active') ){
				$(".main").fadeOut(400);
				$(".main").removeClass('nav_active');
			}
			else{
				$(".main").fadeIn(400);
				$(".main").addClass('nav_active');
			}
		});
	}
	
//#################### Accessible Info
	
	$(".textsize").click(function(){
		if( $(".accessible_info").hasClass('info_active') ){
			$(".accessible_info").fadeOut(400);
			$(".accessible_info").removeClass('info_active');
		}
		else{
			$(".accessible_info").fadeIn(340);
			$(".accessible_info").addClass('info_active');
		}
	});

//#################### Slider Home
	
	if ($(".my_slider").length > 0) {
	
		$('.my_slider').unslider({
			autoplay: false
		});
		
		var unslider = $('.my_slider').unslider();
	
			unslider.on('movestart', function(e) {
				if((e.distX > e.distY && e.distX < -e.distY) || (e.distX < e.distY && e.distX > -e.distY)) {
					e.preventDefault();
				}
		});
		
	}

//#################### Play Accordion

	$("a.more").click(function(){

		if( $(this).parent().hasClass('acc_active') ){
			$(this).parent().next('.content_more').slideUp(350);
			$(this).parent().removeClass('acc_active');
			$(this).text("Mehr +");
		}
		else{
			$(this).parent().next('.content_more').slideDown(350);
			$(this).parent().addClass('acc_active');
			$(this).text("Mehr -");
		}
	});
	
	$("a.more_en").click(function(){

		if( $(this).parent().hasClass('acc_active') ){
			$(this).parent().next('.content_more').slideUp(350);
			$(this).parent().removeClass('acc_active');
			$(this).text("More +");
		}
		else{
			$(this).parent().next('.content_more').slideDown(350);
			$(this).parent().addClass('acc_active');
			$(this).text("More -");
		}
	});

//#################### animated scroll to top

	$('a[href*=#top]').bind("click", function(event) {
		event.preventDefault();

		var myTarget = $(this).attr("href");
		myTarget = $(myTarget).offset().top;

		$('html,body').animate(
			{scrollTop: (myTarget)}, 500);
	});
	
	
//#################### Colorbox Picture Gallery
	
	if ($('.gallery').length > 0) {
		
		$('.open-box').click(function() {
			
			var lastFocus;
			lastFocus = document.activeElement;
			
			var next_gallery = $(this).next().find("img").attr("alt");
			
			$("." + next_gallery).colorbox({rel: next_gallery, transition: "elastic", maxWidth: "90%", maxHeight: "90%", onClosed: function() {lastFocus.focus();} });
			$("a[rel='" + next_gallery + "']").colorbox({open:true});
		 });
		 
		 $('.open-box-caption').click(function() {

			var lastFocus;
			lastFocus = document.activeElement;
			
			var next_gallery = $(this).find("img").attr("alt");
			
			$("." + next_gallery).colorbox({rel: next_gallery, transition: "elastic", maxWidth: "90%", maxHeight: "90%", onClosed: function() {lastFocus.focus();} });
			$("a[rel='" + next_gallery + "']").colorbox({open:true});
		 });
		 
		 //------------ add swipe functionality
		 
		 jQuery("#colorbox").swipe( {
            //Generic swipe handler for all directions
            swipeLeft:function(event, direction, distance, duration, fingerCount) {
               jQuery.colorbox.next();
            },
            swipeRight:function(event, direction, distance, duration, fingerCount) {
               jQuery.colorbox.prev();
            },
            //Default is 75px, set to 0 for demo so any distance triggers swipe
           threshold:0
        });
	}
	
//#################### CSS Change

	function load_reg_css() {
        $(".display1 a").addClass('cur');
		$(".display2 a").removeClass('cur');
		$(".display3 a").removeClass('cur');
		$(".logo img").attr('src','/img/logo.png');
		$(".search-button").attr('src','/img/icon-search.png');
		$(".icon_slide").attr('src','/img/icon_slide.png');
    }
	
	function load_sw_css() {
		$("body").addClass('display_sw');
		$(".display2 a").addClass('cur');
		$(".display1 a").removeClass('cur');
		$(".display3 a").removeClass('cur');
		$(".logo img").attr('src','/img/logo-sw.png');
		$(".search-button").attr('src','/img/icon-search_sw.png');
		$(".icon_slide").attr('src','/img/icon_slide.png');
    }
	
	function load_ws_css() {
		$("body").addClass('display_ws');
		$(".display3 a").addClass('cur');
		$(".display2 a").removeClass('cur');
		$(".display1 a").removeClass('cur');
		$(".logo img").attr('src','/img/logo-ws.png');
		$(".search-button").attr('src','/img/icon-search_ws.png');
		$(".icon_slide").attr('src','/img/icon_slide_ws.png');
    }
	
	$(".display1").click(function(){
		
		$.cookie("css_style", "regular", { path: '/' });
		
		if( $("body").hasClass('display_ws') ){
			$("body").removeClass('display_ws');
		}
		else if( $("body").hasClass('display_sw') ){
			$("body").removeClass('display_sw');
		}
		
		load_reg_css();
		
	});
	
	$(".display2").click(function(){
		
		$.cookie("css_style", "sw", { path: '/' });
		
		if( $("body").hasClass('display_ws') ){
			$("body").removeClass('display_ws');
		}
		
		load_sw_css();
		
	});
	
	$(".display3").click(function(){
		
		$.cookie("css_style", "ws", { path: '/' });
		
		if( $("body").hasClass('display_sw') ){
			$("body").removeClass('display_sw');
		}
		
		load_ws_css();

	});
	
	if( $.cookie("css_style") == "regular" ){
		load_reg_css();
	}
	
	if( $.cookie("css_style") == "sw" ){
		load_sw_css();
	}
	
	if( $.cookie("css_style") == "ws" ){
		load_ws_css();
	}

	//########### Agenda days hidding and showing

	function loadDay1() {
		$(".day2-content").addClass('hidden');
		$(".day1-content").removeClass('hidden');
		$(".day1 button").addClass('cur');
		$(".day2 button").removeClass('cur');
	}
	
	
	function loadDay2() {
		$(".day1-content").addClass('hidden');
		$(".day2-content").removeClass('hidden');
		$(".day2 button").addClass('cur');
		$(".day1 button").removeClass('cur');
	}
	
	$(".day1").click(function(){
			
		
		if( $(".day1-content").hasClass('hidden') ){
			$(".day1-content").removeClass('hidden');
		}		
		loadDay1();
	});
	$(".day2").click(function(){
			
		
		if( $(".day2-content").hasClass('hidden') ){
			$(".day2-content").removeClass('hidden');
		}		
		loadDay2();
	});

});


