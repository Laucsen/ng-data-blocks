'use strict';

angular.module('samples-module')
    .directive('live', [
        function () {
            return {
                restrict: 'E',
                templateUrl: 'scripts/live/live.html',
                scope: {
                    data: '='
                },
                controller: 'LiveController'
            };
        }
    ]);
