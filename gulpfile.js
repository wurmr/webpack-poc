'use strict';

var gulp = require('gulp');
var path = require('path');
var webpack = require('gulp-webpack-build');

var src = './app',
	dest = './wwwroot',
	CONFIG_FILENAME = webpack.config.CONFIG_FILENAME;

gulp.task('webpack', function () {
    return gulp.src(path.join(src, '**', CONFIG_FILENAME), { base: path.resolve(src) })
		.pipe(webpack.compile())
		.pipe(gulp.dest(dest));
});
