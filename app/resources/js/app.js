
let Vue = require('vue');

window.$ = window.jQuery = require('jquery');

require('bootstrap-sass');

require('scrollreveal');

window.animate = require('animate');

window.Event = new Vue();

window.sr = require('scrollreveal')();

//Vue.component('navigation', require('./Navigation.vue'));

$(window).ready(function(){
	
    $('.navbar a').click(function(e) {
        e.preventDefault();
        $('html, body').animate({
            scrollTop: $( $.attr(this, 'href')).offset().top - $('.navbar ').outerHeight(true)
        }, 500);
    });
    
    sr.reveal('.headline', {
        reset: true,
        duration: 1500,
        delay: 50
    });
    
    
    
    sr.reveal('.featurette', {
        reset: true, 
        duration: 1500,
        viewOffset: { top: 60 },
        delay: 50
    });
    
    $.fn.extend({
        animateCss: function (animationName) {
            var animationEnd = 'webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend';
            this.addClass('animated ' + animationName).one(animationEnd, function() {
                $(this).removeClass('animated ' + animationName);
            });
        }
    });
    
	$('#ide').animateCss('lightSpeedIn');
    
});