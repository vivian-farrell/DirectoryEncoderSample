var gulp = require('gulp');
var DirectoryEncoder = require('directory-encoder');
var PostCss = require('gulp-postcss');
var SourceMaps = require('gulp-sourcemaps');
var Autoprefixer = require('autoprefixer');
gulp.task('svg', function(){
	var de = new DirectoryEncoder('svg/', 'svgs.css', {
		prefix: '.svg-'
	});
	de.encode();
});

gulp.task('postcss', function() {
	return gulp.src('styles/styles.css')
		.pipe(SourceMaps.init())
		.pipe(PostCss([ Autoprefixer()]))
		.pipe(SourceMaps.write('.'))
		.pipe(gulp.dest('.'));
});