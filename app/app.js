'use strict';

var angular = require('angular');

var app = angular.module('app', [require('angular-ui-router')]);

var routes = require('./components/routes');

require('./features/home');

app.config(routes);

module.exports = app;