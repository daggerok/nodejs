import hapi, {Server} from 'hapi'
import {port} from '../server.config'
import {render} from '../view'

let app = new Server(), provider = 'hapi'

app.connection({port})

app.route({
  method: 'GET',
  path: '/name/{name}',
  handler: (req, reply) => reply(render(provider, `<div>Hi, <b>${req.params.name}</b></div>`))
})

app.route({
  method: 'GET',
  path: '/{any*}',
  handler: (req, reply, error) => reply(render(provider, `<div>Use next url template: <pre>/name/{name}</pre></div>`))
})

app.start(error => {
  if (error) console.log(`Server Internal Error: ${error? error : ''}`)
  console.log(`hapi listening port ${port}...`)
})
