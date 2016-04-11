var gulp 				= require('gulp');
var browserSync = require('browser-sync').create();
var postcss 		= require('gulp-postcss');
var sourcemaps  = require('gulp-sourcemaps');
var lost 				= require('lost');

var reload 			= browserSync.reload;

var paths = {
	cssSource: 'src/css/',
	cssDestination: 'dist/css/'
};

// sourcemaps, lost
gulp.task('styles', function() {
	return gulp.src(paths.cssSource + '**/*.css')
		.pipe(sourcemaps.init())
		.pipe(postcss([
			lost()
		]))
		.pipe(sourcemaps.write('./'))
		.pipe(gulp.dest(paths.cssDestination));
});

gulp.watch(paths.cssSource + '**/*.css', ['styles']);

gulp.task('default', ['styles']);

// watch files for changes and reload
// gulp.task('serve', function() {
// 	browserSync({
// 		server: {
// 			baseDir: './src'
// 		}
// 	});

// 	gulp.watch(['*.html', 'css/*.css'], {cwd: './src'}, reload);
// });

gulp.task("default", ["styles"]);