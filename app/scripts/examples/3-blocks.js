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
          'margin-left': '10px',
          width: '100px'
        }
      }],
      style: {
        border: '2px solid red'
      }
    }
  })
  .constant('Example_VBlock', {
    data: {
      title: 'V Block',
      type: 'vblock',
      name: 'smapleVBlock',
      value: [],
      style: {
        border: '2px solid green',
        padding: '4px'
      }
    }
  })
  .constant('Example_GroupBlock', {
    data: {
      title: 'Group Block',
      type: 'gblock',
      name: 'smapleGroupBlock',
      value: {
        title: 'Sample Group Box',
        data: {}
      },
      style: {
        border: '2px solid green',
        padding: '4px'
      }
    }
  })
  .run([
    'SamplesService',

    'Example_HBlock',
    'Example_VBlock',
    'Example_GroupBlock',

    function(SamplesService, Example_HBlock, Example_VBlock, Example_GroupBlock) {

      //----------------------------
      // V Block
      var copyA = {};
      var copyB = {};
      var copyC = {};

      angular.copy(Example_HBlock.data, copyA);
      angular.copy(Example_HBlock.data, copyB);
      angular.copy(Example_HBlock.data, copyC);
      //----------------------------
      var vbckp = Example_VBlock;
      vbckp.data.value.push(copyA);
      vbckp.data.value.push(copyB);
      //----------------------------
      var gbckp = Example_GroupBlock;
      gbckp.data.value.data = copyC;
      //----------------------------

      SamplesService.createRegion('blocks');
      SamplesService.configureRegion('blocks', {
        title: 'Blocks',
        description: 'H and V blocks.',
        examples: [
          'Example_HBlock',
          'Example_VBlock',
          'Example_GroupBlock'
        ]
      });
      SamplesService.register('blocks', 'Example_HBlock', Example_HBlock);
      SamplesService.register('blocks', 'Example_VBlock', vbckp);
      SamplesService.register('blocks', 'Example_GroupBlock', gbckp);      
    }
  ])
