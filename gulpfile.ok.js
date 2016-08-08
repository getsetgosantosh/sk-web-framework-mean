var gulp = require('gulp'),
    nodemon = require('gulp-nodemon'),
    gulpLoadPlugins = require('gulp-load-plugins'),
    plugins = gulpLoadPlugins(),
    // livereload = require('gulp-livereload'),
    sass = require('gulp-ruby-sass');
// sass = require('gulp-sass');

var paths = {
    src: {
        // scss: './client/app/app.scss',
        scss: './client/app/**/*.scss',
        jsapp: ['/client/components/**/*.js', '/client/app/**/*.js'],
        jsvendor: './client/assets/vendor/**/*.js',
        cssvendor: './client/assets/vendor/**/*.css'
    },
    dest: {
        css: './client/dist',
        jsapp: './client/dist',
        jsvendor: './client/dist',
        cssvendor: './client/dist'
    },
    node: {
        script: './server/app.js'
    }
}

gulp.task('sass', function() {
    return sass(paths.src.scss)
        .pipe(plugins.cssmin())
        .pipe(gulp.dest(paths.dest.css))
        .pipe(plugins.livereload());
});

gulp.task('css:vendor', function() {
    return gulp.src(paths.src.cssvendor)
        .pipe(plugins.cssmin())
        .pipe(plugins.concat("vendor.min.css"))
        .pipe(gulp.dest(paths.dest.css))
        .pipe(plugins.livereload());
});

gulp.task('js:app', function() {
    console.log(paths.src.jsapp);
    return gulp.src(paths.src.jsapp)
        .pipe(plugins.concat("app.js"))
        .pipe(gulp.dest(paths.dest.jsapp))
        .pipe(plugins.concat("app.min.js"))
        .pipe(plugins.uglify())
        .pipe(gulp.dest(paths.dest.jsapp))
        .pipe(plugins.livereload());
});

gulp.task('js:vendor', function() {
    return gulp.src(paths.src.jsvendor)
        .pipe(plugins.concat("vendor.min.js"))
        .pipe(plugins.uglify())
        .pipe(gulp.dest(paths.dest.jsvendor))
        .pipe(plugins.livereload());
});



gulp.task('watch', function() {
    plugins.livereload.listen();
    gulp.watch(paths.src.scss, ['sass']);
    gulp.watch(paths.src.cssvendor, ['css:vendor']);
    gulp.watch(paths.src.jsapp, ['js:app']);
    gulp.watch(paths.src.jsvendor, ['js:vendor']);
});

gulp.task('develop', function() {
    nodemon({
        script: 'server/app.js',
        stdout: false
    }).on('readable', function() {
        this.stdout.on('data', function(chunk) {
            if (/^Express server listening on port/.test(chunk)) {
                plugins.livereload.changed(__dirname);
            }
        });
        this.stdout.pipe(process.stdout);
        this.stderr.pipe(process.stderr);
    });
});

gulp.task('default', [
    'sass', 'css:vendor', 'js:app', 'js:vendor',
    'develop',
    'watch'
]);