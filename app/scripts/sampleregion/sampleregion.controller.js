'use strict';

angular.module('samples-module')
  .controller('SampleRegionController', [
    '$scope',

    'SamplesService',

    function($scope, SamplesService) {

      //-----------------
      $scope.options = {
        mode: 'tree'
      };
      //-----------------

      //-----------------
      $scope.regionData = SamplesService.getRegionData($scope.srData);
      $scope.datas = {};
      //-----------------
      angular.forEach($scope.regionData.examples, function(ex) {
        $scope.datas[ex] = SamplesService.getData(ex);
      });
      //-----------------

    }
  ]);
