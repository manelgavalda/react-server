const path = require('path');

modules.exports = {
  // Inform webpack that we're building a bundle for nodeJS, tather than for the browser (default)
  target: 'node',

  // Tell webpack the root file of our server application
  entry: './src/index.js',

  // Tell webpack where to put the outpu file that is generated
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'build')
  },

  // Tell webpack to run babel on every file it runs trough
  module: {
    rules: [
      {
        test: /\.js?$/,
        loader: 'babel-loader',
        exclude: /node_modules/
        options: {
          presets: [
            'react',
            'stage-0',
            ['env', { targets: { browsers: ['last 2 versions'] }}]
          ]
        }
      }
    ]
  }
};
