'use strict';
(function () {
    var app = angular.module('matterMail', ['ngRoute', 'ngAnimate', 'AdalAngular']);

    var adalSettings = {
        tenant: 'mykelurodemo.onmicrosoft.com',
        clientId: 'b244a25e-a7d4-478a-acbc-78e345ea78f1',
        postLogoutPath :'sandboxedSample/sandboxed.html',
        popupPath : 'lib/popupwindow.html',
        frameHost : 'http://localhost:35510/',
        aadEndpoints: {
            /* 'target endpoint to be called': 'target endpoint's resource ID'  */
            // sharepoint site containing lists
            'https://mykelurodemo.sharepoint.com/sites/matters/_api/': 'https://mykelurodemo.sharepoint.com/sites/matters',
            // o365 files api
            'https://mykelurodemo-my.sharepoint.com/_api/v1.0/me': 'https://mykelurodemo-my.sharepoint.com/'
        }
    };
    // register the setting as a constant
    app.constant('adalSettings', adalSettings);
    /**
     * Configuration settings for ADAL authentication.
     *
     * @type {{baseSPUrl: string, baseOneDriveUrl: string, defaultHttpGetOptions: {headers: {Accept: string}}}}
     */
    var appSettings = {
        baseSPUrl: 'https://mykelurodemo.sharepoint.com/sites/matters/_api/',
        baseOneDriveUrl: 'https://mykelurodemo-my.sharepoint.com/_api/v1.0/me/',
        defaultSharePointHttpGetOptions: {
            headers: {
                'Accept': 'application/json;odata=verbose'
            }
        },
        defaultO365HttpGetOptions: {
            headers: {
                'Accept': 'application/json;odata=verbose'
            }
        }
    };
    // register the setting as a constant
    app.constant('appSettings', appSettings);
})();