import express from 'express'
import {port} from '../server.config'
import {render} from '../view'

let app = express(), provider = 'express'

app.get('/name/:name', (req, res) => res.send(render(provider, `<div>Hi, ${req.params.name}</div>`)))

app.get('/*', (req, res) => res.send(render(provider, `<div>Use next url template: <pre>/name/{name}</pre></div>`)))

app.listen(port)

console.log(`express listening port ${port}...`)
