(function () {
    'use strict';
    var app = angular.module('matterMail');

    app.config(['$routeProvider', '$httpProvider', 'adalSettings', 'adalAuthenticationServiceProvider', function ($routeProvider, $httpProvider, adalSettings, adalProvider) {
        // create the routes for the application
        $routeProvider
            // route for the home page
            .when('/home', {
                templateUrl: './Home/home.html',
                controller: 'MainController',
                controllerAs: 'mainCtrl'
            })

        
            // route for the contact page
            .when('/settings', {
                templateUrl: './Settings/settings.html',
                controller: 'SettingsController',
                controllerAs :'settingsCtrl',
                requireADLogin: true
            }).otherwise({ redirectTo: '/home' });
        ;;
          
        // setup the Azure AD security config
        // init the ADAL service
        adalProvider.init({
            tenant: adalSettings.tenant,
            clientId: adalSettings.clientId,
            postLogoutRedirectUri: adalSettings.frameHost + adalSettings.popupPath,
            loginConfigUrl: adalSettings.frameHost + adalSettings.popupPath,
            frameHost : adalSettings.frameHost,
            endpoints: adalSettings.aadEndpoints
        }, $httpProvider);
    }]);
})();

