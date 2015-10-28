'use strict';

angular.module('samples-module')
  .directive('sampleRegion', [
    function() {
      return {
        restrict: 'E',
        templateUrl: 'scripts/sampleregion/sampleregion.html',
        scope: {
          srData: '='
        },
        controller: 'SampleRegionController'
      };
    }
  ]);
