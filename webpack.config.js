const path = require('path');

module.exports = [

  // create the shared bundle
  {
    mode: 'development',
    externals: {
      react: ['wp', 'element']
    },
    entry: './plugin/src/index.js',
    output: {
      filename: 'salad-ui-components.js',
      path: path.resolve(__dirname, 'plugin/dist'),
      library: 'saladui',
      libraryTarget: 'window'
    }
  },

  // create the demo page bundle
  {
    mode: 'development',
    externals: {
      react: ['wp', 'element']
    },
    entry: './plugin/src/demo.js',
    output: {
      filename: 'salad-ui-components-demo.js',
      path: path.resolve(__dirname, 'plugin/dist')
    }
  }
  
];
