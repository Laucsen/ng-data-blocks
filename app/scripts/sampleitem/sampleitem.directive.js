'use strict';

angular.module('samples-module')
  .directive('sampleItem', [
    function() {
      return {
        restrict: 'E',
        templateUrl: 'scripts/sampleitem/sampleitem.html',
        scope: {
          siTitle: '@',

          siOptions: '=',
          siData: '=',
          siActions: '='
        }
      };
    }
  ]);
