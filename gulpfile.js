var gulp = require('gulp');
var sass = require('gulp-sass');

gulp.task('default', ['build-sass', 'watch'], function () {
});

gulp.task('build-sass', function () {
    gulp.src('./site.scss')
        .pipe(sass())
        .pipe(gulp.dest('.'))
});

gulp.task('watch', function () {
    gulp.watch('./site.scss', ['build-sass']);
});