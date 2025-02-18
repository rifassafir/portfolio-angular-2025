const webpack = require('webpack');
const path = require('path'); // Import the path module

module.exports = {
  resolve: {
    alias: {
      '@grpc/grpc-js': path.resolve(__dirname, 'node_modules/@grpc/grpc-js'), // Use path.resolve
      '@grpc/proto-loader': path.resolve(__dirname, 'node_modules/@grpc/proto-loader'),  // Use path.resolve
    },
    fallback: {  // Add fallback for Node.js core modules
      "stream": require.resolve("stream-browserify"),
      "buffer": require.resolve("buffer"),
      "util": require.resolve("util"),
      "assert": require.resolve("assert"),
    },
  },
  plugins: [
    new webpack.ProvidePlugin({
      Buffer: ['buffer', 'Buffer'],
      process: 'process/browser',
    }),
  ],
};
