'use strict';

angular.module('samples-module', [
    'ng-data-blocks'
  ])
  .controller('samples-controller', [
    '$scope',

    function($scope) {

      $scope.imageBloc = {
        type: 'image',
        src: '',
        css: {
          border: '1px solid red',
          width: '200px',
          height: '200px'
        }
      };

    }
  ]);
  