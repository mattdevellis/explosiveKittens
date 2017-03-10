const { mix } = require('laravel-mix');

mix.js('app/resources/js/app.js', 'app/public/js/app.js')
.sass('app/resources/sass/app.scss', 'app/public/css/app.css')
    .copy('app/resources/sass/one-page-wonder.css', 'app/public/css/one-page-wonder.css')
    .copy('app/resources/sass/animate.css', 'app/public/css/animate.css')