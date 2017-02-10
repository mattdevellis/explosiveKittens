const { mix } = require('laravel-mix');

mix.js('app/resources/js/app.js', 'app/public/js/app.js')
    .sass('app/resources/sass/app.scss', 'app/public/css/app.css');
