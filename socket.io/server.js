/**
 * express + socket.io messaging chat server
 */

var socket = require('socket.io'),
  express = require('express'),
  path = require('path'),
  app = express(),
  http = require('http').Server(app),
  io = socket.listen(http),
  paths = {
    root: '/',
    index: '/index.html',
    vendors: '/vendors/**',
    uri: '/vendors/',
    base: '/../node_modules/',
    app: '/index.*',
    otherwise: '/**'
  },
  port = process.env.PORT || 8080;

/**
 * socket messages handling
 */

return io.on('connection', function (socket) {
  socket.on('chat message', function (message) {
    io.emit('chat message', message); // broadcast to all
  })
});

/**
 *  server config
 */

http.listen(port, function () {
  console.log('listening on: *:%s', port)
});

/**
 * routes
 */

// root
app.get(paths.root, function (req, resp, next) {
  cache(resp);
  resp.sendFile(get(paths.index))
});
// vendors
app.get(paths.vendors, function (req, resp, next) {
  cache(resp);
  // replace vendors by ../node_modules path
  resp.sendFile(get(req.url.replace(paths.uri, paths.base)))
});
// app
app.get(paths.app, function (req, resp, next) {
  cache(resp);
  resp.sendFile(get(req.url))
});
// otherwise
app.get(paths.otherwise, function (req, resp) {
  cache(resp);
  resp.sendFile(get(paths.root))
});

/**
 * helpers
 */

// normalize file paths
function get(file) {
  return path.normalize(__dirname + file)
}
// cache responses
function cache(resp) {
  if (!resp.getHeader('Cache-Control')) {
    resp.setHeader('Cache-Control', 'public, max-age=' + (315576))
  }
}
