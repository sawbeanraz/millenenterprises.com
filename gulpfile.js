var gulp = require('gulp'),
    watch = require('gulp-watch'),
    scss = require('gulp-sass'),
    minify = require('gulp-cssnano'),
    rename = require('gulp-rename'),
    concat = require('gulp-concat'),
    inject = require('gulp-inject'),
    sync = require('browser-sync').create(),
    uglify = require('gulp-uglify');




gulp.task('serve', function() {
  sync.init({
    server: {
      baseDir: './'
    },
    open: false,
    notify: true
  });

  watch('./scss/**/*.scss', function(done) {
    gulp.start('scss');
  });
  watch('./*.html').on('change', sync.reload);
});





gulp.task('scss', function(done) {
  console.log('Starting SCSS');
  gulp.src('./scss/**/*.scss')
    .pipe(scss({
      outputStyle: 'expanded'
    })).on('error', scss.logError)
    .pipe(rename('style.css'))
    .pipe(gulp.dest('./css/'))
    .pipe(sync.stream());

  console.log('Complete SCSS');
  done();
});

gulp.task('default', ['serve']);



























var css = [
  'node_modules/bootstrap/dist/css/bootstrap.css',
  'node_modules/font-awesome/css/font-awesome.css',
  'node_modules/owl.carousel/dist/assets/owl.carousel.css',
  'css/style.css'
];
var js = [
  'node_modules/jquery/dist/jquery.js',
  'node_modules/bootstrap/dist/js/bootstrap.js',
  'node_modules/owl.carousel/dist/owl.carousel.js',
  'node_modules/gmaps/gmaps.js',
  'js/main.js'
];

gulp.task('build:js', function(cb) {
  gulp.src(js)
    .pipe(concat('bundle.js'))
    .pipe(uglify().on('error', function(e) {
      console.log(e);
    }))
    .pipe(gulp.dest('./dist/js/'));
  cb();
});

gulp.task('build:scss', function(cb) {
  gulp.src('./scss/**/*.scss')
    .pipe(scss({
      outputStyle: 'expanded'
    }))
    .pipe(rename('style.css'))
    .pipe(gulp.dest('./css/'));
  cb();
});

gulp.task('build:css', ['build:scss'], function(cb) {
  gulp.src(css)
    .pipe(concat('bundle.css'))
    .pipe(minify())
    .pipe(gulp.dest('./dist/css/'));
  cb();
});


gulp.task('copy:images', function(done) {
  gulp.src([
    './images/**/*'
  ], {base: '.'})
    .pipe(gulp.dest('./dist/'));
  done();
});


gulp.task('build', ['build:css', 'build:js', 'copy:images'], function() {
  gulp.src('./*.html', {base: '.'})
    .pipe(inject(
      gulp.src([
        './dist/css/bundle.css',
        './dist/js/bundle.js'
      ], { relative: true }, { read: false })))
    .pipe(gulp.dest('./dist/'));
});