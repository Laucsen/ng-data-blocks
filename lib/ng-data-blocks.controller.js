'use strict';

angular.module('ng-data-blocks')
  .controller('ng-data-blocks-controller', [
    '$scope',

    function($scope) {

      /**
       * Available Block Types
       */
      $scope.availableTypes = [
        'image'
      ];

      /**
       * Check for available types.
       */
      $scope.isAvailable = function(type) {
        return $scope.availableTypes.indexOf(type) >= 0;
      };

      /**
       * Check specific type
       */
      $scope.check = function(data, type) {
        return data.type === type;
      };

      /**
       * Keep validating 
       */
      $scope.$watch('data', function(nval) {
        if (nval === undefined) {
          return;
        }

        // TODO - Check for: name, type and value

      });

    }
  ]);
