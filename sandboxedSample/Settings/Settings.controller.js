(function() {
    "use strict";

    var app = angular.module('matterMail');

    app.controller('SettingsController', ['$scope', 'o365Service', function ($scope, o365Service) {
        $scope.message = 'Settings.';
        $scope.files = [];
        o365Service.getUserFiles().then(function (oneDriveFiles) {
            $scope.files = oneDriveFiles;
        });
    }]);
})();