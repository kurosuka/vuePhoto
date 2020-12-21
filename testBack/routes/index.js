/*
 * @Author: your name
 * @Date: 2020-12-17 16:35:20
 * @LastEditTime: 2020-12-18 14:59:54
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \testBack\routes\index.js
 */
var express = require('express');
var router = express.Router();
var config = require('../public/server/config')
var getUsers = require('../public/server/getUsers')
/* GET home page. */
router.get('/', function(req, res, next) {
  var opt = {StudentNum : req.query.StudentNum}
  getUsers(opt).then(recordset=> {
    res.json(recordset)
  })
});
router.post('/test', function(req, res, next) {
  var opt = {StudentNum: req.body.StudentNum};
  getUsers(opt).then(recordset=> {
    res.json(recordset)
  })
});
module.exports = router;
