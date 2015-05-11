'use strict';

var angular = require('angular');

var home = angular.module('home', []);

home.controller('HomeController', require('./home.controller'));

module.exports = home;