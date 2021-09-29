
const { json } = require('express');
const express = require('express')

const router = express.Router();
// const {saveArticle,FindArticle,AllArticle} = require('../server/db/article/index')
const {Article,Comment,User} = require('./db/server')

// Article
router.post('/saveArticle',function(req,res) {
    const {data} = req.query;
    let article = JSON.parse(data);
    article.time = Date.now();
    new Article(article).save((error, result) => {
      if(error) {
        console.log(error);
      } else {
        console.log('success');
      }
    })
    res.status(200).send('succeed in saving new Articles')
})

router.get('/getArticles',function(req, res) {
    let obj = req;
    let data = FindArticle(obj);
    res.send(data) 
})

router.get('/ALLArticles',function(req, res) {
    Article.find((error, result) => {
      if(error) {
        console.log(error);
      } else {
        res.status(200).send(result)
      }
    })
})

router.get('/findArticlesByType/:Type',function(req, res) {
    Article.find({Type: req.params.Type},function(error, result) {
        if(error) {
          console.log(error);
        } else {
          res.status(200).send(result)
        }
    })
})

router.get('/getArticleContent/:id',function(req, res) {
  
  Article.findOne({_id: req.params.id}, function(error, result) {
      if(error) {
        console.log(error);
      } else {
        res.status(200).send(result)
      }
  })
})



// User

router.get('/userLogin',function(req, res) {
  const {data} = req.query;
  let user = JSON.parse(data);
  console.log(user);
  User.findOne({
    name: user.name,
    password: user.password
  },function(error, result) {
    let status = 'pending';
      // if(result) {
      //     status = 'fullfilled'
      // } else {
      //   status = 'failed'
      // }
      console.log(result);
      if(error) {
        console.log(error);
      } 
      res.status(200).send(result);
  })
    //成功返回fullfilled，失败返回failed
})




router.post('/saveComment',function(req,res) {
  const {data}  = req.query;
  let comment = JSON.parse(data);
  let obj = {
    name: comment.name,
    Content: comment.Content,
    time: Date.now()
  }
  new Comment(obj).save()
 
  res.status(200).send('succeed in saving new Comment')

})

router.get('/AllComments',function(req,res) {
  Comment.find((error,result) => {
    if(error){
        res.status(500).send('服务器错误！')
    }
    else{
      res.status(200).send(result)
    }
  }
  )
})






module.exports = router
