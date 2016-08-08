var skModMain = angular.module('skModMain', ['ngRoute']);

skModMain.config(['$routeProvider', function($routeProvider) {
    console.log('in skModMain config');
    $routeProvider.otherwise({
        redirectTo: '/'
    });
}]);

function MainController() {

}

skModMain.component('skMain', {
    templateUrl: 'components/main/main.html',
    controller: MainController
});