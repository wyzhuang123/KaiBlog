
const { json } = require('express');
const e = require('express');
const express = require('express')
// const jwt  = require('express-jwt');
const jwt = require('jsonwebtoken');
// const { use } = require('vue/types/umd');
// const { default: _default } = require('vuex');
const images = require('images')
const router = express.Router();
// const {saveArticle,FindArticle,AllArticle} = require('../server/db/article/index')
const { Article, Comment, User, ArticleComment } = require('./db/server')


// Article
router.post('/saveArticle', function (req, res) {
  const { data } = req.query;
  let article = JSON.parse(data);
  article.time = Date.now();
  new Article(article).save((error, result) => {
    if (error) {
      console.log(error);
    } else {
      console.log('success');
    }
  })
  res.status(200).send('succeed in saving new Articles')
})
router.get('/students', function(req, res) {
    res.send('123');
})
router.get('/getArticles', function (req, res) {
  let obj = req;
  let data = FindArticle(obj);
  res.send(data)
})

router.get('/ALLArticles', function (req, res) {
  Article.find((error, result) => {
    if (error) {
      console.log(error);
    } else {
      res.status(200).send(result)
    }
  })
})

router.get('/findArticlesByType/:Type', function (req, res) {
  Article.find({ Type: req.params.Type }, function (error, result) {
    if (error) {
      console.log(error);
    } else {
      res.status(200).send(result)
    }
  })
})

router.get('/getArticleContent/:id', function (req, res) {

  Article.findOne({ _id: req.params.id }, function (error, result) {
    if (error) {
      console.log(error);
    } else {
      res.status(200).send(result)
    }
  })
})



// User

router.get('/userLogin', function (req, res) {
  const { data } = req.query;
  let user = JSON.parse(data);
  console.log(user);
  User.findOne({
    name: user.name,
    password: user.password
  }, function (error, result) {
    if (error) {
      res.send({status: 0})
    }
    // res.status(200).send(result);
    if (result) {
      let content = { name: user.name };
      let secretOrPrivateKey = "kaikai991129";
      let token = jwt.sign(content, secretOrPrivateKey, {
        expiresIn: 60 * 60 * 24 * 7    //一周过期
      })
      result.token = token;
      User.findOneAndUpdate({ name: user.name }, { token: token }, function (error, result1) {
        if (error) {
          console.log(error);
        } else {
          console.log(result1);
          res.status(200).send(result1);
        }
      })
    } else {
      res.send('登录失败');
    }
  })
})


router.post('/checkLogin', function (req, res) {
  const {data} = req.query;
  let user = JSON.parse(data);
  // console.log(user);
  User.find({ name: user.name, token: user.token }, (error, result) => {
    if (error) {
      console.log(err);
    }
    if (result) {
      let token = user.token;
      let secretOrPrivateKey = "kaikai991129";
      // 解析token
      jwt.verify(token, secretOrPrivateKey, function (error, result1) {
        if (error) {
          res.send({ status: 0 });   // 时间失效 或者 是伪造的token
        } else {
          res.send({result,status: 1});  
        }
      })
    } else {
      res.send({ status: 0 });
    }
  })
})

// 换头像
router.post('/userAvatarChange',function(req, res) {
  // const {data} = req.query;
  // let user = JSON.parse(data);
  const user = req.fields;
  console.log(user);
    User.find({name: user.name, token: user.token}, (err, result) => {
      if(error) {
        return 
      }

      if(result) {
        const fs = require('fs');
        let D = Date.now();
        let saveImg = path.join(__dirname, '../public/img/avatar/' + D + '.png');
        let pathImg = './public/img/avatar/' + D + '.png';//返前台路径目录
        let base64 = user.avatar.replace(/^data:image\/\w+;base64,/, "");
        let dataBuffer = new Buffer(base64, 'base64'); //把base64码转成buffer对象，
        fs.writeFile(saveImg, dataBuffer, function (err) {//用fs写入文件
            if (err) {
                console.log(err);
            } else {
                console.log('写入成功！', saveImg);
                User.findByIdAndUpdate({name: user.name}, {avatar: pathImg}, (error, result) => {
                      if(error) {
                        return ;
                      } else {
                          res.status(200).send('更新成功！');
                      }
                })
            }
        })

      }
    })
})
router.get('/hasUser', function (req, res) {
  const { data } = req.query;
  let user = JSON.parse(data); //拿到注册页面的名字
  console.log(user);
  User.findOne({
    name: user.name
  }, function (error, result) {
    if (error) {
      console.log(error);
    } else if (!result) {
      res.status(200).send('0');
    } else {
      res.status(200).send('1');
    }
  })
})


router.post('/insertUser', function (req, res) {
  const { data } = req.query;
  let user = JSON.parse(data);
  console.log(user);
  new User(user).save(function (error, result) {
    if (error) {
      console.log(error);
    } else {
      res.status(200).send(result);
    }
  })
})






router.post('/saveComment', function (req, res) {
  const { data } = req.query;
  console.log(data);
  let comment = JSON.parse(data);
  // console.log(comment);
  let obj = {
    name: comment.name,
    Content: comment.Content,
    time: Date.now()
  }
  new Comment(obj).save()
  res.status(200).send('succeed in saving new Comment')

})

router.get('/AllComments', function (req, res) {
  Comment.find((error, result) => {
    if (error) {
      res.status(500).send('服务器错误！')
    }
    else {
      res.status(200).send(result)
    }
  }
  )
})


// article-comment


// 添加评论
router.post('/saveArticleComment', function (req, res) {
  const { data } = req.query;
  // console.log(data);
  let articlecomment = JSON.parse(data);
  // console.log(articlecomment);
  Article.findOne({
    _id: articlecomment.articleId
  }, function (error, result) {
    if (error) {
      console.log(error);
    } else {
      let comment = result.comments;
      //  comment.time = Date.now();
      //  console.log(comment);
      articlecomment.time = Date.now();
      comment.push(articlecomment);
      Article.findOneAndUpdate({ _id: articlecomment.articleId }, { comments: comment }, (error, result) => {
        if (error) {
          console.log(error);
        } else {
          res.status(200).send('评论成功！');
        }
      })
    }
  })
})


// 所有文章评论

// router.get('/getArticleComment/:articleId',function(req, res) {
//   Article.find({articleId: req.params.articleId}, function(error, result) {
//     if(error) {
//       console.log(error);
//     } else {
//       res.status(200).send(result);
//     }
// })
// })





module.exports = router
