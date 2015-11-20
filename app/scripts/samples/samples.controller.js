'use strict';

angular.module('samples-module')
  .controller('samples-controller', [
    '$scope',

    'SamplesService',

    function($scope, SamplesService) {
      //-----------------
      $scope.regions = SamplesService.getRegions();
      //-----------------
    }
  ]);
