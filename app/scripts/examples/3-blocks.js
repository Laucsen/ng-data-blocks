'use strict';

angular.module('samples-module')
  .constant('Example_HBlock', {
    data: {
      title: 'H Block',
      type: 'hblock',
      name: 'smapleHBlock',
      value: [{
        title: 'Label',
        type: 'label',
        name: 'smapleLabelBlock',
        value: 'Some awsome Label: ',
        style: {
          color: '#110022',
          margin: 0
        }
      }, {
        title: 'Input',
        type: 'input',
        name: 'smapleInputBlock',
        value: 'Sample Info',
        style: {
          border: '1px solid gray',
          color: 'black',
          'margin-left': '10px'
        }
      }],
      style: {
        border: '2px solid red'
      }
    }
  })
  .run([
    'SamplesService',

    'Example_HBlock',

    function(SamplesService, Example_HBlock) {

      SamplesService.createRegion('blocks');
      SamplesService.configureRegion('blocks', {
        title: 'Blocks',
        description: 'H and V blocks.',
        examples: [
          'Example_HBlock'
        ]
      });
      SamplesService.register('blocks', 'Example_HBlock', Example_HBlock);
    }
  ])
