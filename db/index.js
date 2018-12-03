
//创建数据库
const mongoose = require('mongoose');

      module.exports = new Promise((resolve, reject) => {
          mongoose.connect('mongodb://localhost:27017/zhipin',{useNewUrlParser : true});
          mongoose.connection.once('open',error => {
              if(!error){
                  console.log('数据库启动成功');
                  resolve();
              }else {
                  console.log('数据库异常');
                  reject();
              }
          })
      })
