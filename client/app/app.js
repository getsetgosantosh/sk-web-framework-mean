'use strict';

var skModApp = angular.module('skModApp', ['ngRoute',
    'skModMain', 'skModFooter'
]);

skModApp.config(['$routeProvider', function($routeProvider) {
    console.log('in config');
    // $routeProvider.otherwise({
    //     redirectTo: '/'
    // });
    // $locationProvider.html5Mode(true);
}]);

skModApp.run(function($rootScope, $location) {
    console.log('in run');
});

angular.element(document).ready(function() {
    console.log('I m ready');
})