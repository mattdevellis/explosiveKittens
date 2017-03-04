const { mix } = require('laravel-mix');

mix.js('app/resources/js/app.js', 'app/public/js/app.js')
    .sass('app/resources/sass/one-page-wonder.css', 'app/public/css/one-page-wonder.css');
