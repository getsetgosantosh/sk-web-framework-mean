'use strict';

var skModApp = angular.module('skModApp', ['ngRoute', 'skModMain', 'skModFooter', 'skModNavbar']);

skModApp.config(['$routeProvider', function ($routeProvider) {
    console.log('in config');
}]);

skModApp.run(function ($rootScope, $location) {
    console.log('in run');
});

angular.element(document).ready(function () {
    console.log('I m ready');
});
'use strict';

var skModFooter = angular.module('skModFooter', ['ngRoute']);

skModFooter.config(['$routeProvider', function ($routeProvider) {
    console.log('in skModFooter config');
    $routeProvider.otherwise({
        redirectTo: '/'
    });
}]);

function FooterController() {}

skModFooter.component('skFooter', {
    templateUrl: 'components/footer/footer.html',
    controller: FooterController
});
'use strict';

var skModNavbar = angular.module('skModNavbar', ['ngRoute']);

skModNavbar.config(['$routeProvider', function ($routeProvider) {
    console.log('in skModNavbar config');
    $routeProvider.otherwise({
        redirectTo: '/'
    });
}]);

function NavbarController() {}

skModNavbar.component('skNavbar', {
    templateUrl: 'components/Navbar/Navbar.html',
    controller: NavbarController
});
'use strict';

var skModMain = angular.module('skModMain', ['ngRoute']);

skModMain.config(['$routeProvider', function ($routeProvider) {
    console.log('in skModMain config');
    $routeProvider.otherwise({
        redirectTo: '/'
    });
}]);

function MainController() {}

skModMain.component('skMain', {
    templateUrl: 'components/main/main.html',
    controller: MainController
});