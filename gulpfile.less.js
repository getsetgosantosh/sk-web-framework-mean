var gulp = require('gulp'),
    // less = require('gulp-less'),
    nodemon = require('gulp-nodemon'),
    plumber = require('gulp-plumber'),
    livereload = require('gulp-livereload'),
    sass = require('gulp-sass');

var paths = {
    src: {
        scss: './client/app/app.scss',
        // less: './client/css/less/**/*.less'
    },
    dest: {
        css: './client/css'
    },
    node: {
        script: './server/app.js'
    }
}

gulp.task('build:sass', function() {
    return sass(paths.src.sass)
        .pipe(gulp.dest(paths.dest.css))
        .pipe(livereload());
});

// gulp.task('build:less', function() {
//     return gulp.src(path.src.less)
//         .pipe(less())
//         .pipe(gulp.dest(path.dest.css))
//         .pipe(livereload());
// });

gulp.task('watch', function() {
    gulp.watch(paths.src.sass, ['build:sass']);
    // gulp.watch(paths.src.less, ['build:less']);
});

gulp.task('develop', function() {
    livereload.listen();
    nodemon({
        script: 'server/app.js',
        stdout: false
    }).on('readable', function() {
        this.stdout.on('data', function(chunk) {
            if (/^Express server listening on port/.test(chunk)) {
                livereload.changed(__dirname);
            }
        });
        this.stdout.pipe(process.stdout);
        this.stderr.pipe(process.stderr);
    });
});

gulp.task('default', [
    'build:sass',
    // 'build:less',
    'develop',
    'watch'
]);