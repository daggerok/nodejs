export default class CommonController {
  static index(req, res) {
    return res.render('main', {
      title: req.hbsData.title,
      content: `hi ${req.params.name ? req.params.name : 'buddy'}`
    })
  }

  static error(req, res) {
    return res.render('main', {
      title: req.hbsData.title,
      content: 'sorry, but error.. :('
    })
  }
}
