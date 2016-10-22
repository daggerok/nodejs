import commons  from '../ctrl/CommonController'

export default (app) => app

  .get('/name/:name', commons.index)
  
  .get('/err*', commons.error)
  
  .get('*', commons.index)
