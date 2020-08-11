const path = require('path');

module.exports = {
  transpileDependencies: ["vuetify", "vue-clamp", "resize-detector"],
  outputDir: path.resolve(__dirname, '../server/public'),
  devServer: {
    proxy: {
      '/api': {
        target: 'http://localhost:5000'
      }
    }
  }
}
