/*
 * @Author: your name
 * @Date: 2020-12-17 16:35:20
 * @LastEditTime: 2020-12-18 08:41:06
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \testBack\routes\users.js
 */
var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});
router.get('/test', function(req, res, next) {
  res.json({
    a:1
  })});

module.exports = router;
