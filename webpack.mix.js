const mix = require('laravel-mix');

/*
 |--------------------------------------------------------------------------
 | Mix Asset Management
 |--------------------------------------------------------------------------
 |
 | Mix provides a clean, fluent API for defining some Webpack build steps
 | for your Laravel application. By default, we are compiling the Sass
 | file for the application as well as bundling up all the JS files.
 |
 */

mix
    .scripts([
        'node_modules/@fullcalendar/core/main.min.js',
        'node_modules/@fullcalendar/interaction/main.min.js',
        'node_modules/@fullcalendar/daygrid/main.min.js',
        'node_modules/@fullcalendar/timegrid/main.min.js',
        'node_modules/@fullcalendar/list/main.min.js',
        'node_modules/@fullcalendar/core/locales-all.js'

    ], 'public/assets/fullcalendarNPM/js/fullcalendar.js')

    .scripts([
        'node_modules/jquery/dist/jquery.js',
        'node_modules/jquery-mask-plugin/dist/jquery.mask.js',
        'node_modules/moment/moment.js',

    ], 'public/assets/fullcalendarNPM/js/jquery-and-mask-and-moment.js')

    .scripts([
        'node_modules/bootstrap/dist/js/bootstrap.js',

    ], 'public/assets/fullcalendarNPM/js/bootstrap.js')

    .scripts([
        'resources/views/fullcalendar/js/script.js',
        'resources/views/fullcalendar/js/calendar.js',

    ], 'public/assets/fullcalendarNPM/js/scriptCalendar.js')

    .styles([
        'node_modules/@fullcalendar/core/main.min.css',
        'node_modules/@fullcalendar/daygrid/main.min.css',
        'node_modules/@fullcalendar/timegrid/main.min.css',
        'node_modules/@fullcalendar/list/main.min.css',
    ], 'public/assets/fullcalendarNPM/css/fullcalendar.css')

    .styles([
        'node_modules/bootstrap/dist/css/bootstrap.css',

    ], 'public/assets/fullcalendarNPM/css/bootstrap.css')

    .styles([
        'resources/views/fullcalendar/css/style.css',

    ], 'public/assets/fullcalendarNPM/css/style.css');
