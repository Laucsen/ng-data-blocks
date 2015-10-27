'use strict';

angular.module('samples-module')
  .directive('sampleItem', [
    function() {
      return {
        restrict: 'E',
        templateUrl: 'scripts/samples.html',
        scope: {
          siTitle: '@',

          siOptions: '=',
          siData: '=',
          siActions: '='
        }
      };
    }
  ]);
