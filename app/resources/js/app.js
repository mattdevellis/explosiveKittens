let Vue = require('vue');
window.$ = window.jQuery = require('jquery');

require('bootstrap');

window.Event = new Vue();

Vue.component('jumbo', require('./Jumbotron.vue'));


new Vue({
    el: '#app',
    
});