'use strict';

module.exports = {
   create: require('gulp-cordova-create'),
   plugin: function() {
      var p = require('gulp-cordova-plugin');
      p.remove = require('gulp-cordova-plugin-remove');
      return p;
   }(),
   preference: require('gulp-cordova-preference'),
   access: require('gulp-cordova-access'),
   version: require('gulp-cordova-version'),
   description: require('gulp-cordova-description'),
   author: require('gulp-cordova-author'),
   icon: require('gulp-cordova-icon'),
   xml: require('gulp-cordova-xml'),
   build: {
      ios: require('gulp-cordova-build-ios'),
      android: require('gulp-cordova-build-android'),
      bb10: require('gulp-cordova-build-bb10')
   }
};
