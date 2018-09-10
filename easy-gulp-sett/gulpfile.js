var gulp = require('gulp');
var watch = require('gulp-watch');
var sass = require('gulp-sass');
var clean = require('gulp-clean-css');
var webserver = require('gulp-webserver');
var browser = require('browser-sync').create();

var path = {
	scssPATH : './easy-sett/testSCSS/*.scss',
	cssPATH : './easy-sett/convertCSS',
	minifyDist : './easy-sett/minifyDist',
	htmlDist : './easy-sett/html/*.html'
};


gulp.task('sass', function () {
return gulp.src(path.scssPATH)
	.pipe(sass())
	.pipe(gulp.dest(path.cssPATH))
});

gulp.task('minify', function () {
	return gulp.src('./easy-sett/**/*.css')
		.pipe(clean())
		.pipe(gulp.dest(path.minifyDist))
		.pipe(browser.reload({
			stream : true
		}));
});

gulp.task('html', function(){
	gulp.src(path.htmlDist)
		.pipe(webserver.reload())
		.pipe(browser.reload({
			stream : true
		}));
});

gulp.task('browser',['minify'], function(){
	browser.init({
		port : 7000,
		proxy : 'localhost:8080',
		open : true
	});
});



gulp.task('watch', function(){
	gulp.watch([path.scssPATH] , ['sass']);
	gulp.watch([path.cssPATH + '/**/*.css'], ['minify']);
	// return gulp.src('./easy-sett')
	// 	.pipe(webserver({
	// 		port:8888,
	// 		open:true
	// 	}))
});