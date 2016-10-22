var express = require('express');
var router = express.Router();

/* GET some api resource. */
router.get('/', (req, res, next) => {
  res.send(`respond some resource: ${new Date}`);
});

module.exports = router;
