const { options } = require("../../routes")

/*
 * @Author: your name
 * @Date: 2020-12-18 10:17:45
 * @LastEditTime: 2020-12-18 14:33:33
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \testBack\public\server\config.js
 */
var config = {
  user: 'sa',
    password: 'sinoyd123!@#',
    server: 'localhost', // You can use 'localhost\\instance' to connect to named instance
    database: 'test',
    port: 1433,
    options: {
      'encrypt':false,
      enableArithAbort: false
    }
}
module.exports = config