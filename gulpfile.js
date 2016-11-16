var concat = require('gulp-concat');
var gulp = require('gulp');
var sass = require('gulp-sass');
var autoprefixer = require('gulp-autoprefixer');
var sourcemaps = require('gulp-sourcemaps');
var fileinclude = require('gulp-file-include');
var browserSync = require('browser-sync');
var reload = browserSync.reload;

// Where do you store your Sass files?
var sassDir = 'resources/_scss';

// Which directory should Sass compile to?
var targetCSSDir = 'resources/css';

//
//  Compile SCSS
//  -----------------------
gulp.task('sass', function () {
    return gulp.src([
      "resources/_scss/main.scss"
    ])
      .pipe(sourcemaps.init())
      .pipe(concat('main.css'))
      .pipe(sass())
      .on('error', handleErrors)
      .pipe(autoprefixer({
        browsers: ['last 2 versions'],
        cascade: false
      }))
      .pipe(sourcemaps.write('./maps'))
      .pipe(gulp.dest('./resources/css/'));
});

//
//  WATCH
//  -----------------
gulp.task('watch', function () {

    // listen on port 35729
    browserSync({
      server: {
        baseDir: "./"
      }
    });
    
    // watch scss files
    gulp.watch('resources/_scss/**/*.scss', ['sass']);
    gulp.watch('resources/css/*.css').on('change', reload);
    gulp.watch('resources/js/*.js').on('change', reload);
    gulp.watch('*.html').on('change', reload);

});

//
//  Gulp Tasks
//  --------------------
// command = "gulp"
gulp.task('default', ['sass', 'watch']);
// command = "gulp styles"
gulp.task('styles', ['sass']);

// handle errors function
function handleErrors(error) {
    console.log(error.toString());
    this.emit('end');
}
