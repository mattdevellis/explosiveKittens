((window) => {
let Vue = require('vue');
window.$ = window.jQuery = require('jquery');

require('bootstrap-sass');

window.Event = new Vue();

//Vue.component('navigation', require('./Navigation.vue'));

new Vue({
    el: '#app',
    
});
})(window)