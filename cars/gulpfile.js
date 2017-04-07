var gulp = require("gulp");

var jshint = require("gulp-jshint");
/* gulp.task('default', function () {
	console.log("hello world");
}); */

gulp.task('jshint',function(){
	gulp.src('./scripts/*.js')
		.pipe(jshint())
		.pipe(jshint.reporter('default'));
	
});

gulp.task('default',['jshint']);