var gulp = require('gulp'),
    plumber = require('gulp-plumber'),
    concat  = require('gulp-concat'),
    uglify  = require('gulp-uglify')

gulp.task('f4pjs', function() {
  //script one by one
    return gulp.src([
        'js/jquery-library.js',
        'js/materialize.js',
        'js/slick.js',
        'js/swiper.min.js',
        'js/loadingoverlay.js',
        'js/loadingoverlay_progress.js',
        'js/jquery.lettering.js',
        'js/equal-height.js',
        'js/wow.js',
        'js/jquery.swipebox.js',
        'js/custom.js'
    ])
    .pipe(plumber())
    //made uglify
    .pipe(uglify())
    //made concat one by one
    .pipe(concat('f4p-min.js'))
    //send the minify file in the production folder
    .pipe(gulp.dest('js/@f4pjs-production'));
});


// watch task started
gulp.task('watch', function(){
    gulp.watch('js/*.js', ['f4pjs']);
});

// gulp default taskstart
gulp.task('default', [ 'f4pjs', 'watch' ]);
