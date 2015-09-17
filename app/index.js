let angular = require('angular');

if (ON_TEST) {
	require('angular-mocks/angular-mocks');
}

let awModule = angular.module('aw', []);

require('./hello')(awModule);
