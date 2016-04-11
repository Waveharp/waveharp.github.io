var gulp 				= require('gulp'),
    browserSync = require('browser-sync'),
    postcss 		= require('gulp-postcss'),
    sourcemaps  = require('gulp-sourcemaps'),
    lost 				= require('lost'),
    rucksack    = require('gulp-rucksack');

var reload 			= browserSync.reload;

var paths = {
	cssSource: 'src/css/',
	cssDestination: 'dist/css/'
};

// lost, rucksack, sourcemaps
// gulp.task('styles', function() {
// 	return gulp.src(paths.cssSource + '**/*.css')
// 		.pipe(sourcemaps.init())
// 		.pipe(postcss([
// 			lost()
// 		]))
// 		.pipe(rucksack())
// 		.pipe(sourcemaps.write('./'))
// 		.pipe(gulp.dest(paths.cssDestination));
// });

// gulp.watch(paths.cssSource + '**/*.css', ['styles']);

// gulp.task('default', ['styles']);

// watch files for changes and reload
// gulp.task('serve', function() {
// 	browserSync({
// 		server: {
// 			baseDir: './src'
// 		}
// 	});

// 	gulp.watch(['*.html', 'css/*.css'], {cwd: './src'}, reload);
// });

// gulp.task("default", ["styles"]);