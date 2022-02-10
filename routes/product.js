var express = require('express');
var router = express.Router();
var models = require('../models');

/* GET home page. */

// post / CRUD - create 
// router.post('/', async function (req, res, next) {
//   // 增加外部输入的一条dict记录: req.body
//   // res.json({ 'New item：': req.body })
//   var product = await models.Product.create(req.body)
//   res.json({ product: product })
// });

// get1 / promise 方法 
// router.get('/', function(req, res, next) {
//   // res.json({hello: 'testing'});
//   models.Product.findAll({
//     order: [
//       ['title','desc'],
//       ['content','asc'],
//     ]
//   }).then( products => {
//     res.json({ products: products })
//   })
// });

// get2 / CRUD - retrieve  全部列表 / await 方法 
var Op = models.Sequelize.Op
router.get('/', async function (req, res, next) {
  // 模糊查询处理
  // var where = {}
  // var title = req.query.title
  // if (title) {
  //   where.title = {
  //     [Op.like]: '%' + title + '%'
  //   }
  // }
  // 提取数据
  var products = await models.Product.findAll({
    // order: [
    //   ['item', 'desc'],
    // ],
    // where: where  // 模糊查询
  })
  res.json({ products: products })
});

// get / CRUD - retrieve 提取一条
router.get('/:id', async function (req, res, next) {
  // res.json({hello: 'testing'});
  // console.log('input: ', req.params.id)
  var product = await models.Product.findByPk(req.params.id)
  res.json({ product: product })
});

// put / CRUD - update
// router.put('/:id', async function (req, res, next) {
//   var product = await models.Product.findByPk(req.params.id)
//   product.update(req.body)
//   res.json({ product: product })
// });

// put / CRUD - delete
// router.delete('/:id', async function (req, res, next) {
//   var product = await models.Product.findByPk(req.params.id)
//   product.destroy()
//   res.json({ msg: 'id: ' + req.params.id + " has been Deleted" })
// });

module.exports = router;
