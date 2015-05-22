
(function () {
    'use strict';
    /**
     * Office 365 REST API Angular service.
     */
    var O365Service = (function () {
        function O365Service($http, $q, appSettings) {
            this.$http = $http;
            this.$q = $q;
            this.appSettings = appSettings;
        }
        /**
         * Get all the user's files.
         *
         * @returns {IPromise<adalO365CorsClient.shared.IFile[]>}   Collection of all the current user's files.
         */
        O365Service.prototype.getUserFiles = function () {
            var deferred = this.$q.defer();
            var endpoint = this.appSettings.baseOneDriveUrl + 'files/root/children?' + '$select=name,webUrl' + '&$orderby=name';
            // issue query to the Office 365 Files API
            //
            // NOTE: because this is a cross domain REST call, the browser will first issue an HTTP OPTIONS request to check
            //       that the REST API supports CORS requests for specific HTTP methods
            this.$http.get(endpoint, this.appSettings.defaultHttpGetOptions).then(function (result) {
                console.log(result);
                var files = result.data.value;
                deferred.resolve(files);
            });
            return deferred.promise;
        };
        O365Service.$inject = ['$http', '$q', 'appSettings'];
        return O365Service;
    })();

    // register the service with the Angular app
    angular.module('matterMail').service('o365Service', O365Service);
})();

//# sourceMappingURL=../services/o365.service.js.map