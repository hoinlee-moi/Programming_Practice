
const {createProxyMiddleware} = require('http-proxy-middleware');

module.exports = function(app) {
    app.use(
        '/api',
        createProxyMiddleware({
            target: 'http://15.165.19.237:8080/',
            changeOrigin:true
        })
    )
}