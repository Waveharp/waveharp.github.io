var gulp 				= require('gulp'),
    postcss 		= require('gulp-postcss'),
    sourcemaps  = require('gulp-sourcemaps'),
    lost 				= require('lost'),
    rucksack    = require('rucksack-css');

var browserSync = require('browser-sync').create();
var reload 			= browserSync.reload;

// PostCSS config
// gulp.task('css', function () {
// 	var processors = [
// 		rucksack(),
// 	];
// 	return gulp.src('./src/*.css')
// 		.pipe(sourcemaps.init())
// 		.pipe(postcss(processors))
// 		.pipe(sourcemaps.write('.'))
// 		.pipe(gulp.dest('./dist'));
// });



var paths = {
	cssSource: 'src/css/',
	cssDestination: 'dist/css/'
};

// Styles - PostCSS, Lost, Rucksack, sourcemaps
gulp.task('styles', function() {
	return gulp.src(paths.cssSource + '**/*.css')
		.pipe(sourcemaps.init())
		.pipe(postcss([
			lost(),
			rucksack({
				autoprefixer: true
			})
		]))
		.pipe(sourcemaps.write('./'))
		.pipe(gulp.dest(paths.cssDestination));
});

// Start static server and watch files
gulp.task('browser-sync', function() {
	browserSync.init({
		server: {
			baseDir: 'src'
		}
	});

	gulp.watch('css/*.css', ['styles']);
	gulp.watch('src/*.html').on('change', reload);
});


gulp.task('default', ['browser-sync']);