import express        from 'express'
import middleware     from './config/middleware'
import routes         from './config/routes'
import {title, port}  from './config/server.config'

// chain: -> express -> middleware -> routes -> listen
routes(middleware(express())).listen(port)

console.log(`${title} listening port ${port}...`)
