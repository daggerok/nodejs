function cache(res) {
  var cacheHeader = 'Cache-Control';
  if (!res.getHeader(cacheHeader)) {
    res.setHeader(cacheHeader, 'public, max-age=' + 315576)
  }
}

var { join } = require('path');

var parse = req => {
  var replacement = join(process.cwd(), 'node_modules/');
  return req.url.replace('/vendors/', replacement);
};

/* GET vendors files */
module.exports = (req, res) => {
  var filepath = parse(req);
  cache(res);
  res.sendFile(filepath);
};
