import koa from 'koa'
import _ from 'koa-route'
import {port} from '../server.config'
// need for generators: app.use(function *() { ... })
import 'babel-polyfill'
import {render} from '../view'

let app = koa(), provider = 'koa'

app.use(_.get('/name/:name', function *(name) {
  this.body = render(provider, `<div>Hi, <b>${name}</b></div>`)
}))

app.use(_.get('/*', function *() {
  this.body = render(provider, `<div>Use next url template: <pre>/name/{name}</pre></div>`)
}))

app.listen(port)

console.log(`koa listening port ${port}...`)
