let Vue = require('vue');
window.$ = window.jQuery = require('jquery');

require('bootstrap');

window.Event = new Vue();

Vue.component('tab', require('./Tab.vue'));

new Vue({
    el: '#app',
    
});