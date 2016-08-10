var skModNavbar = angular.module('skModNavbar', ['ngRoute']);

skModNavbar.config(['$routeProvider', function($routeProvider) {
    console.log('in skModNavbar config');
    $routeProvider.otherwise({
        redirectTo: '/'
    });
}]);

function NavbarController() {

}

skModNavbar.component('skNavbar', {
    templateUrl: 'components/Navbar/Navbar.html',
    controller: NavbarController
});