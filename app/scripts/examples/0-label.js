'use strict';

angular.module('samples-module')
  .constant('Example_Label', {
    data: {
      title: 'Label',
      type: 'label',
      name: 'smapleLabelBlock',
      value: 'Some awsome Label: ',
      style: {
        color: '#110022',
        'font-size': '30px',
        'font-stretch': 'extra-condensed',
        'font-style': 'oblique',
        'font-weight': 100
      }
    }
  })
  .run([
    'SamplesService',

    'Example_Label',

    function(SamplesService, Example_Label) {

      SamplesService.createRegion('labels');
      SamplesService.configureRegion('labels', {
        title: 'Label',
        description: 'Label Blocks.',
        examples: [
          'Example_Label'
        ]
      });
      SamplesService.register('labels', 'Example_Label', Example_Label);
    }
  ])
