var gulp           = require('gulp'),
		sass           = require('gulp-sass'),
		browserSync    = require('browser-sync'),
		concat         = require('gulp-concat'),
		uglify         = require('gulp-uglify'),
		cleanCSS       = require('gulp-clean-css'),
		rename         = require('gulp-rename'),
		del            = require('del'),
		cache          = require('gulp-cache'),
		autoprefixer   = require('gulp-autoprefixer'),
		rigger         = require('gulp-rigger'),
		notify         = require("gulp-notify");

gulp.task('common-js', function() {
	return gulp.src([
		'app/js/scrolldown.js',
		'app/js/common.js'
		])
	.pipe(concat('common.min.js'))
	.pipe(uglify())
	.pipe(gulp.dest('app/js'));
});

gulp.task('js', ['common-js'], function() {
	return gulp.src([
		'app/libs/jquery/jquery.min.js',
		'app/libs/slick/slick.min.js',
    'app/libs/createjs/createjs-2015.11.26.min.js',
		'app/libs/pagescroll/jquery.malihu.PageScroll2id.js',
		// 'app/libs/tubular/jquery.tubular.1.0.js',
		// 'app/libs/waypoint/jquery.waypoints.min.js',
		'app/libs/parallax/parallax.min.js',
		'app/libs/scrollmagic/ScrollMagic.min.js',
		'app/libs/scrollmagic/jquery.ScrollMagic.min.js',
		// 'app/libs/scrollmagic/debug.addIndicators.min.js',
		'app/libs/scrollmagic/animation.gsap.min.js',
		'app/libs/greensock/TweenLite.min.js',
		'app/libs/greensock/TimelineLite.min.js',
		'app/libs/greensock/plugins/CSSPlugin.min.js',
		'app/libs/greensock/easing/EasePack.min.js',
		'app/libs/greensock/plugins/ScrollToPlugin.min.js',
		'app/js/common.min.js', // Всегда в конце
		])
	.pipe(concat('scripts.min.js'))
	.pipe(uglify()) // Минимизировать весь js
	.pipe(gulp.dest('app/js'))
	.pipe(browserSync.reload({stream: true}));
});

gulp.task('browser-sync', function() {
	browserSync({
		server: {
			baseDir: 'app'
		},
		notify: false,
		browser: 'google chrome',
		// tunnel: true,
		// tunnel: "projectmane", //Demonstration page: http://projectmane.localtunnel.me
	});
});

gulp.task('html', function () {
	gulp.src('app/html/*.html')
		.pipe(rigger()).on("error", notify.onError())
		.pipe(gulp.dest('app/'))
		.pipe(browserSync.reload({stream: true}));
});

gulp.task('sass', function() {
	return gulp.src('app/sass/**/*.sass')
	.pipe(sass({outputStyle: 'expand'}).on("error", notify.onError()))
	.pipe(rename({suffix: '.min', prefix : ''}))
	.pipe(autoprefixer(['last 15 versions']))
	.pipe(cleanCSS()) // Опционально, закомментировать при отладке
	.pipe(gulp.dest('app/css'))
	.pipe(browserSync.reload({stream: true}));
});

gulp.task('watch', ['html', 'sass', 'js', 'browser-sync'], function() {
	gulp.watch('app/html/**/*.html', ['html']);
	gulp.watch('app/sass/**/*.sass', ['sass']);
	gulp.watch(['libs/**/*.js', 'app/js/common.js'], ['js']);
	gulp.watch('app/*.html', browserSync.reload);
});

gulp.task('build', ['removebuild', 'sass', 'js'], function() {

	var buildFiles = gulp.src([
		'app/*.html',
		]).pipe(gulp.dest('build'));

	var buildCss = gulp.src([
		'app/css/main.min.css',
		]).pipe(gulp.dest('build/css'));

	var buildJs = gulp.src([
		'app/js/scripts.min.js',
		]).pipe(gulp.dest('build/js'));

	var buildFonts = gulp.src([
		'app/fonts/**/*',
		]).pipe(gulp.dest('build/fonts'));

	var copyImg = gulp.src([
		'app/img/**/*',
	]).pipe(gulp.dest('build/img'));

});

gulp.task('removebuild', function() { return del.sync('build'); });
gulp.task('clearcache', function () { return cache.clearAll(); });

gulp.task('default', ['watch']);
