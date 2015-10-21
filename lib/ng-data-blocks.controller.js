'use strict';

angular.module('ng-data-blocks')
  .controller('ng-data-blocks-controller', [
    '$scope',

    function($scope) {

      $scope.$watch('data', function(nval) {
        if (nval === undefined) {
          return;
        }

        // TODO
        
      });

    }
  ]);
