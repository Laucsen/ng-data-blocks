'use strict';

angular
  .module('ng-data-blocks', [
    'ng-data-blocks.templates'
  ])
  .directive('ngDataBlocks', [
    function() {
      return {
        restrict: 'E',
        templateUrl: 'ng-data-blocks.html',
        scope: {
          data: '='
        },
        controller: 'ng-data-blocks-controller'
      };
    }
  ]);
