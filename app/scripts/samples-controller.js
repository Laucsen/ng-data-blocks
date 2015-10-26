'use strict';

angular.module('samples-module', [
    'ng-data-blocks'
  ])
  .controller('samples-controller', [
    '$scope',

    'sample-encoded-image-a',

    function($scope, sampleEncodedImageA) {

      //-----------------
      // Image url example
      $scope.imageSchema = {
        type: 'object',
        title: 'Image Url',
        properties: {
          title: {
            type: 'string',
            title: 'Item Name'
            // required: true,
            // minLength: 1
          },
          type: {
            type: 'string',
            title: 'Type',
            required: true,
            min: 1
          },
          name: {
            type: 'string',
            title: 'Name',
            required: true,
            min: 1
          },
          value: {
            type: 'string',
            title: 'Value'
          },
          style: {
            type: 'object',
            title: 'Style'
          }
        }
      };
      $scope.imageBloc = {
        title: 'Image Url',
        type: 'image',
        name: 'smapleImage',
        value: 'images/mageawakening.png',
        style: {
          border: '1px solid red',
          height: '150px'
        }
      };
      //-----------------

      //-----------------
      // Encoded imagem example
      $scope.image64Bloc = {
        title: 'Image 64',
        type: 'image',
        name: 'smapleImage',
        value: sampleEncodedImageA,
        css: {
          border: '1px solid red',
          height: '300px',
          padding: '4px'
        }
      };
      //-----------------

      // TODO: get and set to each created block?

    }
  ]);
