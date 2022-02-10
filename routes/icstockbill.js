var express = require('express');
var router = express.Router();
var models = require('../models');
// const icstockbill = require('../models/icstockbill');

/* GET home page. */

// post / CRUD - create 
// router.post('/', async function (req, res, next) {
//   // 增加外部输入的一条dict记录: req.body
//   // res.json({ 'New item：': req.body })
//   var icstockbill = await models.Icstockbill.create(req.body)
//   res.json({ icstockbill: icstockbill })
// });

// get1 / promise 方法 
// router.get('/', function(req, res, next) {
//   // res.json({hello: 'testing'});
//   models.Icstockbill.findAll({
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
  // var where = {}
  // var supp = req.query.supp
  // if (supp) {
  //   where.title = {
  //     [Op.like]: '%' + title + '%'
  //   }
  // }
  // 提取数据
  var icstockbill = await models.Icstockbill.findAll({
    skip: 1000,  
    limit: 500, 
    // $cond : ['not', ['FFetchAdd'=null]],
    // order: [
    //   ['title', 'desc'],
    //   ['content', 'asc'],
    // ],
    // where: where  // 模糊查询
  })
  res.json({ icstockbill: icstockbill })
});

// get / CRUD - retrieve 提取一条
router.get('/:id', async function (req, res, next) {
  // res.json({hello: 'testing'});
  // console.log('input: ', req.params.id)
  var icstockbill = await models.Icstockbill.findByPk(req.params.id)
  res.json({ icstockbill: icstockbill })
});

// put / CRUD - update
// router.put('/:id', async function (req, res, next) {
//   var icstockbill = await models.Icstockbill.findByPk(req.params.id)
//   icstockbill.update(req.body)
//   res.json({ icstockbill: icstockbill })
// });

// put / CRUD - delete
// router.delete('/:id', async function (req, res, next) {
//   var icstockbill = await models.Icstockbill.findByPk(req.params.id)
//   icstockbill.destroy()
//   res.json({ msg: 'id: ' + req.params.id + " has been Deleted" })
// });

module.exports = router;
