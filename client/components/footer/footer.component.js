var skModFooter = angular.module('skModFooter', ['ngRoute']);

skModFooter.config(['$routeProvider', function($routeProvider) {
    console.log('in skModFooter config');
    $routeProvider.otherwise({
        redirectTo: '/'
    });
}]);

function FooterController() {

}

skModFooter.component('skFooter', {
    templateUrl: 'components/footer/footer.html',
    controller: FooterController
});