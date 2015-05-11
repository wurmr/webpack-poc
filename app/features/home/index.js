'use strict';

var angular = require('angular');

var home = angular.module('home', []);

home.controller('homeController', require('./home.controller'));

module.exports = home;