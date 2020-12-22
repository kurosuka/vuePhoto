/*
 * @Author: your name
 * @Date: 2020-12-18 11:21:47
 * @LastEditTime: 2020-12-22 16:37:15
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \testBack\public\server\getUsers.js
 */
var sql = require('mssql');
var dbConfig  =  require('../server/config')
function uploadImg(data) {
  return new Promise((resolve,reject)=>{
    var conn = new sql.ConnectionPool(dbConfig);
    var req = new sql.Request(conn);
  conn.connect((err)=>{
    if(err) {
      console.log(err);
      return
    }
    req.query(`select * from tb_student where StudentNum= ${data.StudentNum}`,function(err,recordset){
      console.log(recordset);
      if(err){
        console.log(err);
        return 
      } else {
       resolve(recordset.recordset)
      }
      conn.close();
    })
  })
  })
  
}
module.exports = uploadImg