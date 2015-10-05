var elixir = require('laravel-elixir');

var gulp = require('gulp');
var concat = require('gulp-concat');
var sourcemaps = require('gulp-sourcemaps');
var uglify = require('gulp-uglify');
var ngAnnotate = require('gulp-ng-annotate');
var watch = require('gulp-watch');


var less = require('gulp-less');
var watchLess = require('gulp-watch-less');
var rename = require('gulp-rename');
var autoprefixer = require('gulp-autoprefixer');
var minifyCSS = require('gulp-minify-css');
var notify = require('gulp-notify');

/*
 |--------------------------------------------------------------------------
 | Elixir Asset Management
 |--------------------------------------------------------------------------
 |
 | Elixir provides a clean, fluent API for defining some basic Gulp tasks
 | for your Laravel application. By default, we are compiling the Less
 | file for our application, as well as publishing vendor resources.
 |
 */

var gulp = require('gulp');


gulp.task('main', function () {
    return gulp.src('resources/assets/main/style.less')
        //.pipe(watchLess('resources/assets/less/style.less'))
        .pipe(less({compress: true}))
        .pipe(autoprefixer('last 10 versions', 'ie 9'))
        .pipe(minifyCSS({keepBreaks: false}))
        .pipe(rename('app.min.css'))
        .pipe(gulp.dest('public/css'))
        .pipe(notify('Portal Less Compiled, Prefixed and Minified'));
});
gulp.task('customizers', function () {
    return gulp.src('resources/assets/customizer/home-pages-customizer.less')
        .pipe(less({compress: true}))
        .pipe(autoprefixer('last 10 versions', 'ie 9'))
        .pipe(minifyCSS({keepBreaks: false}))
        .pipe(rename('home-pages-customizer.min.css'))
        .pipe(gulp.dest('public/css/customizer'))
        .pipe(notify('Customizers Less Compiled, Prefixed and Minified'));
});

gulp.task('bootstrap', function() {
    return gulp.src('resources/assets/bootstrap/less/bootstrap.less')
        .pipe(less({compress:true}))
        .pipe(autoprefixer('last 10 versions', 'ie 9'))
        .pipe(minifyCSS({keepBreaks: false}))
        .pipe(rename('bootstrap.min.css'))
        .pipe(gulp.dest('public/css'))
        .pipe(notify('Bootstrap Less Compiled, Prefixed and Minified'));
})



var sources = [
    'public/js/modules/notosportal.module.js',
    'public/js/modules/**/*module*.js',
    'public/js/modules/**/*.js'
];

gulp.task('js', function () {
    gulp.src(sources)
        .pipe(sourcemaps.init())
        .pipe(concat('app.min.js'))
        .pipe(ngAnnotate())
        .pipe(uglify())
        .pipe(sourcemaps.write())
        .pipe(gulp.dest('public/js'))
        .pipe(notify('Portal JS Compiled and Minified'));
});



gulp.task('watch', function() {
    gulp.watch('public/js/modules/**/*.js', ['js']);
    gulp.watch('resources/assets/main/**/*.less', ['main']);  // Watch all the .less files, then run the less task
    gulp.watch('resources/assets/bootstrap/**/*.less', ['bootstrap']);  // Watch all the .less files, then run the less task
    gulp.watch('resources/assets/customizer/**/*.less', ['customizers']);  // Watch all the .less files, then run the less task
});

gulp.task('default', ['watch']);

