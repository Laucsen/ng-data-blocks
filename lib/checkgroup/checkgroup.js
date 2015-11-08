'use strict';

angular
    .module('ng-data-blocks')
    .directive('checkgroup', [
        function() {
            return {
                restrict: 'E',
                replace: true,
                templateUrl: 'checkgroup/checkgroup.html',
                scope: {
                    cgData: '='
                },
                controller: 'checkgroup-controller'
            };
        }
    ]);
