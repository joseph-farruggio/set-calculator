let mix = require('laravel-mix');


mix.postCss("src/stylesheet.css", "dist", [
  require("tailwindcss"),
 ]);

mix.js('src/app.js', 'dist')

// mix.browserSync();