'use strict';

angular
  .module('ng-data-blocks', [])
  .directive('ngDataBlocks', [
    function() {
      return {
        restrict: 'E',
        // templateUrl: '???',
        scope: {
          data: '='
        },
        controller: 'ng-data-blocks-controller'
      };
    }
  ]);
