var app = require('express')();
var http = require('http').Server(app);

var proxy = require('http-proxy-middleware');

const proxyOptions = {
    target: 'http://orion.iascj.org.br',
    // onProxyReq: relayRequestHeaders,
    // onProxyRes: relayResponseHeaders,
    changeOrigin: true
}

// function relayRequestHeaders(proxyReq, req) {
//   Object.keys(req.headers).forEach(function (key) {
//     proxyReq.setHeader(key, req.headers[key]);
//   });
// }

// function relayResponseHeaders(proxyRes, req, res) {
//   Object.keys(proxyRes.headers).forEach(function (key) {
//     res.append(key, proxyRes.headers[key]);
//   });
// }

app.use(proxy(proxyOptions));

http.listen(3000, function(){
  console.log('listening on *:3000');
});