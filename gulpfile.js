var gulp = require('gulp');
var sass = require('gulp-sass');

gulp.task('default', function () {
    gulp.task('build-sass');
});

gulp.task('build-sass', function () {
    gulp.src('./site.scss')
        .pipe(sass())
        .pipe(gulp.dest('.'))
});

gulp.watch('./site.scss', ['build-sass']);