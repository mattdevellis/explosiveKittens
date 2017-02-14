window.$ = require('jquery');
require('bootstrap');

let data = {
    message: 'Hello World'
};

new Vue({
    el: '#root',
    data: data
});