'use strict';

angular.module('samples-module')
  .factory('SamplesService', [

    function() {
      var regions = ['images'];

      var regionsData = {
        images: {
          title: 'Images',
          description: 'Blocks to manipulate images.',
          examples: [
            'Example_ImageUrl',
            'Example_Image64'
          ]
        }
      };

      var datas = {};

      return {
        getRegions: function() {
          return regions;
        },
        getRegionData: function(region) {
          return regionsData[region];
        },
        getData: function(dataname) {
          return datas[dataname];
        },
        register: function(region, dataname, data) {

          if (regions.indexOf(region) === -1) {
            throw 'Undefined Region: ' + region;
          }

          datas[dataname] = data;
        }
      };
    }
  ]);
