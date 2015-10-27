'use strict';

angular.module('samples-module')
  .controller('samples-controller', [
    '$scope',

    'sample-encoded-image-a',

    'Example_ImageUrl',

    function($scope, sampleEncodedImageA, Example_ImageUrl) {

      $scope.options = {
        mode: 'tree'
      };

      //-----------------
      // Image url example
      $scope.imageBloc = Example_ImageUrl.data;
      $scope.imageBlockOptions = Example_ImageUrl.actions;
      //-----------------
      //-----------------

      //-----------------
      // Encoded imagem example
      $scope.image64Bloc = {
        title: 'Image 64',
        type: 'image',
        name: 'smapleImage',
        value: sampleEncodedImageA,
        style: {
          height: '100px',
          padding: '4px'
        }
      };
      //-----------------

      // TODO: get and set to each created block?

    }
  ]);
