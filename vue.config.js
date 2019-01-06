const bodyParser = require('body-parser')

module.exports = {
  devServer:{
    before: app => {
      // HTTPリクエストのbodyの内容をJSONとして解析するようミドルウェアをインストール
      app.use(bodyParser.json())

      // APIの実装内容
      // app.get('/some/path', function (req, res) {
      //   res.json({custom: 'response'});
      // });
    },
    proxy: {
      'api': {
        target: 'http://localhost:5000/',
        changeOrigin: true,
        pathRewrite: {
          '^api': ''
        }
      }
    }
  }
}
