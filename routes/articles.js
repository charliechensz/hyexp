var express = require('express');
var router = express.Router();
var models = require('../models');

/* GET home page. */

// post / CRUD - create 
router.post('/', async function (req, res, next) {
  // 增加外部输入的一条dict记录: req.body
  // res.json({ 'New item：': req.body })
  var article = await models.Article.create(req.body)
  res.json({ article: article })
});

// get1 / promise 方法 
// router.get('/', function(req, res, next) {
//   // res.json({hello: 'testing'});
//   models.Article.findAll({
//     order: [
//       ['title','desc'],
//       ['content','asc'],
//     ]
//   }).then( articles => {
//     res.json({ articles: articles })
//   })
// });

// get2 / CRUD - retrieve  全部列表 / await 方法 
var Op = models.Sequelize.Op
router.get('/', async function (req, res, next) {
  // 模糊查询处理
  var where = {}
  var title = req.query.title
  if (title) {
    where.title = {
      [Op.like]: '%' + title + '%'
    }
  }
  // 提取数据
  var articles = await models.Article.findAll({
    order: [
      ['title', 'desc'],
      ['content', 'asc'],
    ],
    where: where  // 模糊查询
  })
  res.json({ articles: articles })
});

// get / CRUD - retrieve 提取一条
router.get('/:id', async function (req, res, next) {
  // res.json({hello: 'testing'});
  // console.log('input: ', req.params.id)
  var article = await models.Article.findByPk(req.params.id)
  res.json({ article: article })
});

// put / CRUD - update
router.put('/:id', async function (req, res, next) {
  var article = await models.Article.findByPk(req.params.id)
  article.update(req.body)
  res.json({ article: article })
});

// put / CRUD - delete
router.delete('/:id', async function (req, res, next) {
  var article = await models.Article.findByPk(req.params.id)
  article.destroy()
  res.json({ msg: 'id: ' + req.params.id + " has been Deleted" })
});



module.exports = router;
