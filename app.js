
//创建服务器
const express = require('express');
const app  = new express();
const db = require('./db');
const router = require('./router');

(async ()=>{
  await db;
  app.use(router);
})()


app.listen(4000,err => {
  if (!err) console.log('服务器启动成功')
  else console.log(err)
})