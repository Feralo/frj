
function scroll_to(clicked_link, nav_height) {
	var element_class = clicked_link.attr('href').replace('#', '.');
	var scroll_to = 0;
	if(element_class != '.top-content') {
		element_class += '-container';
		scroll_to = $(element_class).offset().top - nav_height;
	}
	if($(window).scrollTop() != scroll_to) {
		$('html, body').stop().animate({scrollTop: scroll_to}, 1000);
	}
}


jQuery(document).ready(function() {
	
	/***** Navigation *****/

	$('a.scroll-link').on('click', function(e) {
		e.preventDefault();
		var nav_height = $('nav').height();
		if($('nav').css('position') != 'static') { // window width > 767px
			scroll_to($(this), nav_height);
		}
		else {
			scroll_to($(this), 0);
		}
	});
	
	$('.show-menu a').on('click', function(e){
		e.preventDefault();
		var menu_links = $('.nav-links a').not('.nav-links .show-menu a');
		if(menu_links.css('display') == 'none') {
			menu_links.css('display', 'inline-block');
		}
		else {
			menu_links.css('display', 'none');
		}
	});
	
	$(window).on('resize', function(){
		var menu_links = $('.nav-links a').not('.nav-links .show-menu a');
		if($('nav').css('position') != 'static') { // window width > 767px
			menu_links.css('display', 'inline-block');
		}
		else {
			menu_links.css('display', 'none');
		}
	});
	
	/***** CSS ANIMATIONS (DISABLES ON MOBILE DEVICES) *****/ 

	userAgent = window.navigator.userAgent;
	
	if(/iP(hone|od|ad)/.test(userAgent)==false) {

		$('.slide-up').bind('inview', function (event, visible) {
		  if (visible == true) {
		    // element is now visible in the viewport
		    $(this).addClass('animated fadeInUp');
		  } else {
		    // element has gone out of viewport
		    $(this).removeClass('animated fadeInUp');
		  }
		});

	}


/***** Pretty Photo *****/

$(document).ready(function(){
	jQuery("a[data-gal^='prettyPhoto']").prettyPhoto();
});

/***** Testimonials *****/

$('.carousel').carousel({
  interval: 5000,
});
	
/***** Background slideshow *****/

$('.top-content').backstretch([
  "assets/img/backgrounds/1.jpg"
, "assets/img/backgrounds/2.jpg"
, "assets/img/backgrounds/3.jpg"
, "assets/img/backgrounds/4.jpg"
, "assets/img/backgrounds/5.jpg"
], {duration: 3000, fade: 800});

/***** Google maps *****/

   var position = new google.maps.LatLng(50.833332, 4.350000);
    $('.map-address #map').gmap({'center': position, 'zoom': 15, 'disableDefaultUI':true, 'callback': function() {
            var self = this;
            self.addMarker({'position': this.get('map').getCenter() });	
        }
    });
});
