
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
        duration: 1000,
        delay: 50
    });
    
    sr.reveal('.featurette', {
        reset: true, 
        duration: 1000,
        viewOffset: { top: 60 },
        delay: 50
    });
    
});