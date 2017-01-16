var fs = require('fs');
var gulp = require('gulp');
var browserify = require('browserify');
var babelify = require('babelify');
var sass = require('gulp-sass');
var liveServer = require('live-server');

gulp.task('scripts:build', function() {
    browserify('./js/src/app.js')
        .transform(babelify, {presets: ["es2015", "react"]})
        .bundle()
        .pipe(fs.createWriteStream("js/dist/app.min.js"));
});

gulp.task('styles:build', function() {
    return gulp.src('./sass/style.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(gulp.dest('./css'));
});

gulp.task('watch', ['scripts:build', 'styles:build'], function() {
    gulp.watch(['js/src/**/*.js'], ['scripts:build']);
    gulp.watch(['sass/**/*.scss'], ['styles:build']);
    liveServer.start({ ignore: 'node_modules,js/src,sass' });
});

gulp.task('default', ['watch'], function() {});

