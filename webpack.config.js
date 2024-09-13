var path = require('path');
module.exports = {
  entry: {
    index: './src/index.js', 
    AntDesign: './src/AntDesign.js',
    Entypo: './src/Entypo.js',
    EvilIcons: './src/EvilIcons.js',
    Feather: './src/Feather.js',
    FontAwesome: './src/FontAwesome.js',
    FontAwesome5: './src/FontAwesome5.js',
    FontAwesome6: './src/FontAwesome6.js',
    Fontisto: './src/Fontisto.js',
    Foundation: './src/Foundation.js',
    Ionicons: './src/Ionicons.js',
    MaterialCommunityIcons: './src/MaterialCommunityIcons.js',
    MaterialIcons: './src/MaterialIcons.js',
    Octicons: './src/Octicons.js',
    SimpleLineIcons: './src/SimpleLineIcons.js',
    Zocial: './src/Zocial.js',
  },
  output: {
    filename: '[name].js',
    path: path.resolve(__dirname, 'dist'),
    libraryTarget: 'commonjs2' // ----------------------
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        include: path.resolve(__dirname, 'src'),
        exclude: /(node_modules|dist)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['env']
          }
        }
      }
    ]
  },
  externals: {
    'react': 'commonjs react' // ----------------------
  }
};