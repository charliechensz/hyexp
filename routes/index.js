var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: '弘业中间件数据平台', author:'Charlie' });
});

module.exports = router;
