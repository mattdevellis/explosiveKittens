
let Vue = require('vue');
window.$ = window.jQuery = require('jquery');

require('bootstrap-sass');

window.Event = new Vue();

//Vue.component('navigation', require('./Navigation.vue'));

$(window).ready(function(){
    $('.navbar a').click(function(e) {
        e.preventDefault();
        $('html, body').animate({
            scrollTop: $( $.attr(this, 'href')).offset().top-60
        }, 500);
    });
    
    $('.fadeInObject #headerName').fadeIn(2000);
    $('.fadeInObject #headerDDD').fadeIn(4000);
    
});