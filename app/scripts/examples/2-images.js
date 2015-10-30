'use strict';

angular.module('samples-module')
  .constant('Example_ImageUrl', {
    data: {
      title: 'Image Url',
      type: 'image',
      name: 'smapleImageBlock',
      data: 'images/mageawakening.png',
      style: {
        border: '2px solid gray',
        height: '150px'
      }
    },
    actions: {
      data: {
        title: 'Select a Image to dynamic change of values',
        values: [
          'images/mageawakening.png',
          'images/wod.png'
        ]
      }
    }
  })
  .constant('Example_Image64', {
    data: {
      title: 'Image 64',
      type: 'image',
      name: 'smapleImage64',
      data: '',
      style: {
        height: '100px',
        padding: '4px'
      }
    }
  })
  .run([
    'SamplesService',

    'Example_ImageUrl',
    'Example_Image64',

    'sample-encoded-image-a',

    function(SamplesService, Example_ImageUrl, Example_Image64, sampleEncodedImageA) {

      SamplesService.createRegion('images');
      SamplesService.configureRegion('images', {
        title: 'Images',
        description: 'Blocks to manipulate images.',
        examples: [
          'Example_ImageUrl',
          'Example_Image64'
        ]
      });

      var i64 = Example_Image64;
      i64.data.data = sampleEncodedImageA;

      SamplesService.register('images', 'Example_ImageUrl', Example_ImageUrl);
      SamplesService.register('images', 'Example_Image64', i64);
    }
  ])
