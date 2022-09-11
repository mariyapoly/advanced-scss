const mix = require('laravel-mix');
require('mix-tailwindcss');

mix.sass( 'src/app.scss', 'dist' ).tailwind();
mix.js( 'src/app.js', 'dist' );