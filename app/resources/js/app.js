
let Vue = require('vue');

window.$ = window.jQuery = require('jquery');

window.$ = window.Bootstrap_SCSS = require('bootstrap-sass');

window.$ = window.Animate = require('animate');

window.Event = new Vue();

//Vue.component('navigation', require('./Navigation.vue'));

$(window).ready(function(){
//     $("a.scroll[href^='#']").on('click', function(e) {
// 		e.preventDefault();
// 		var hash = this.hash;
// 		$('html, body').animate({ scrollTop: $(this.hash).offset().top}, 1000, function(){window.location.hash = hash;});
// 	});
	
    $('.navbar a').click(function(e) {
        e.preventDefault();
        $('html, body').animate({
            scrollTop: $( $.attr(this, 'href')).offset().top-60
        }, 500);
    });
    
     $('.h1.scrollpoint.sp-effect3').fadeIn(2000);
     $('.h2.scrollpoint.sp-effect3').fadeIn(4000);
    
    if($(window).width() > 767) {
		$('.scrollpoint.sp-effect1').waypoint(function(){$(this).toggleClass('active');$(this).toggleClass('animated fadeInLeft');},{offset:'90%'});
		$('.scrollpoint.sp-effect2').waypoint(function(){$(this).toggleClass('active');$(this).toggleClass('animated fadeInRight');},{offset:'90%'});
		$('.scrollpoint.sp-effect3').waypoint(function(){$(this).toggleClass('active');$(this).toggleClass('animated fadeInDown');},{offset:'90%'});
		$('.scrollpoint.sp-effect4').waypoint(function(){$(this).toggleClass('active');$(this).toggleClass('animated fadeIn');},{offset:'70%'});
    }
});