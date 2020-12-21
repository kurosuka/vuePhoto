/*
 * @Author: your name
 * @Date: 2020-12-21 10:47:41
 * @LastEditTime: 2020-12-21 16:29:05
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \testBack\public\server\login.js
 */
var express = require('express');
var router = express.Router();
var config = require('../public/server/config')
var getLogin = require('../public/server/getLogin');
var register = require('../public/server/register');
var md5 = require('crypto-js/md5')
console.log(getLogin);
/* GET home page. */
router.post('/', function(req, res, next) {
  console.log(req.body);
  var opt = {
    userName: req.body.userName,
    pwd: req.body.pwd,
  }
  getLogin(opt).then(recordset=> {
    res.json(recordset)
  })
});
router.post('/register', function(req, res, next) {
  console.log(req.body);
  var opt = {
    userName: req.body.userName,
    pwd: req.body.pwd,
  }
  register(opt).then(recordset=> {
    res.json(recordset)
  })
});
module.exports = router;