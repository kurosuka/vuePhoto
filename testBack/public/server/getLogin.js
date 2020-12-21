/*
 * @Author: your name
 * @Date: 2020-12-21 10:50:17
 * @LastEditTime: 2020-12-21 13:51:39
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \testBack\public\server\getLogin.js
 */

var sql = require('mssql');
var dbConfig  =  require('../server/config')
function getLogin(data) {
  return new Promise((resolve,reject)=>{
    var conn = new sql.ConnectionPool(dbConfig);
  var req = new sql.Request(conn);
  conn.connect((err)=>{
    if(err) {
      console.log(err);
      return
    }
    req.query(`SELECT * FROM [user] WHERE userName = '${data.userName}' AND password = '${data.pwd}'`,function(err,recordsets){
      console.log(recordsets);
      if(err){
        console.log(err);
        return 
      } else {
       if(recordsets.recordset.length !=0) {
         resolve({
           code: 200,
           status: 'success',
           msg: '登录成功',
         })
       } else {
         resolve({
          code: 400,
          status: false,
          msg: '登录失败'
         })
       }
      }
      conn.close();
    })
  })
  })
  
}
module.exports = getLogin