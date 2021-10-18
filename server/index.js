const express = require('express')

const app = express()

const router = require('./router')

const formidableMiddleware = require('express-formidable');


// 跨域cors
app.all('*', function(req, res, next) {
  //设为指定的域
  res.header('Access-Control-Allow-Origin', "*");
  res.header("Access-Control-Allow-Headers", "X-Requested-With");
  res.header('Access-Control-Allow-Headers', 'Content-Type');
  res.header("Access-Control-Allow-Methods", "PUT,POST,GET,DELETE,OPTIONS");
  res.header('Access-Control-Allow-Credentials', true);
  res.header("X-Powered-By", ' 3.2.1');
  next();
});


// app.use(formidableMiddleware)
app.use(router, formidableMiddleware)
app.listen('3001',() => {
  console.log('running in 3001');
})