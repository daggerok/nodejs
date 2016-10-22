import express from 'express'
import morgan from 'morgan'
import {title, port} from './server.config'

export default (app) => app

  .use((err, req, res, next) => {
    console.log(`handled error: ${err}`)
    next()
  })
  
  .use((req, res, next) => {
    req.hbsData = {
      title
    }
    next()
  })
  
  .use(morgan('dev'))
  
  .set('view engine', 'hbs')
  
  .set('views', `${__dirname}/../hbs`)
  
  .use(express.static(`${__dirname}/../static`))
