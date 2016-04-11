var gulp = require('gulp');
var browserSync = require('browser-sync');
var reload = browserSync.reload;
var postcss = require('gulp-postcss');

// watch files for changes and reload
gulp.task('serve', function() {
	browserSync({
		server: {
			baseDir: '.'
		}
	});

	gulp.watch(['*.html', 'css/*.css'], {cwd: '.'}, reload);
});

gulp.task("default", ["serve"], function() {
	console.log("Watching files");
});