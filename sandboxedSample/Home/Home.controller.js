(function() {
    "use strict";

    var app = angular.module('matterMail');

    // create the controller and inject Angular's $scope
    app.controller('MainController', ['$scope', 'adalAuthenticationService', function ($scope, adalAuthenticationService) {

        $scope.isFailed = false;
        $scope.errorMessage = '';

        $scope.userInfo = adalAuthenticationService.userInfo;

        $scope.clickLogin = function () {
            adalAuthenticationService.login();
        }

        $scope.clickLogout = function () {
            adalAuthenticationService.logOut();
        }

        $scope.$on("adal:loginSuccess", function () {
            $scope.testMessage = "loginSuccess";
            $scope.userInfo = adalAuthenticationService.userInfo;
        });

        // optional
        $scope.$on("adal:loginFailure", function () {
            $scope.testMessage = "loginFailure";
            $location.path("/login");
            $scope.userInfo = adalAuthenticationService.userInfo;
        });

        // optional
        $scope.$on("adal:notAuthorized", function (event, rejection, forResource) {
            $scope.testMessage = "It is not Authorized for resource:" + forResource;
            $scope.userInfo = adalAuthenticationService.userInfo;
        });
    }]);
})();

