/*
 * @Author: your name
 * @Date: 2020-12-21 13:50:36
 * @LastEditTime: 2020-12-21 16:31:00
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \testBack\public\server\register.js
 */
var sql = require('mssql');
var dbConfig  =  require('../server/config')
function register(data) {
  return new Promise((resolve,reject)=>{
    var conn = new sql.ConnectionPool(dbConfig);
  var req = new sql.Request(conn);
  conn.connect((err)=>{
    if(err) {
      console.log(err);
      return
    }
    req.query(`INSERT INTO [user](userName, password)VALUES('${data.userName}', '${data.pwd}')`,function(err,recordsets){
      console.log(recordsets);
      if(err){
        resolve({
          code: 400,
          status: false,
          msg: '注册失败'
        })
        return 
      } else {
       if(recordsets.length != 0) {
         resolve({
           code: 200,
           status: 'success',
           msg: '注册成功',
         })
       } else {
         resolve({
          code: 400,
          status: false,
          msg: '注册失败'
         })
       }
      }
      conn.close();
    })
  })
  })
  
}
module.exports = register