'use strict';

var gulp = require('gulp');
var gutil = require('gulp-util');
var del = require('del');
var $ = require('gulp-load-plugins')();
var webpack = require('webpack');
var WebpackDevServer = require('webpack-dev-server');
var webpackConfig = require('./webpack.config.js');
var pkg = require('./package.json');
var port = pkg.config.port || 3000;


gulp.task('webpack-dev-server', function(callback) {
  new WebpackDevServer(webpack(webpackConfig), {
    publicPath: webpackConfig.output.publicPath,
    stats: { colors: true },
    hot: true
  }).listen(port, 'localhost', function(err) {
    if (err) { new gutil.PluginError('webpack-dev-server', err); }

    gutil.log('[webpack-dev-server]');
    callback();
  });
});

gulp.task('webpack', function(callback) {
  webpack(webpackProConfig, function(err, stats) {
    if (err) { new gutil.PluginError('webpack:build', err); }

    gutil.log('[webpack:build]', stats.toString({colors: true}));
    callback();
  });
});

gulp.task('watch', ['webpack-dev-server'], function() {});

// need watch dir
gulp.task('default', function() {
  console.log('Run "gulp watch" or "gulp deploy"');
});
