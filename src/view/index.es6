let view = `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <title>Node.js using Babel ES6</title>
  <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.6/css/bootstrap.min.css" />
</head>
<body>
  <div class="container">
    <h3>{{provider}} is serving...</h3>
    <div id="content">{{content}}</div>
  </div>
</body>
</html>
`

export let render = (provider, content) =>
  view
    .replace(new RegExp('{{provider}}', 'g'), provider? provider: 'noname')
    .replace(new RegExp('{{content}}', 'g'), content? content: 'O.o')
