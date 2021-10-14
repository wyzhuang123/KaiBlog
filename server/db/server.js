const mongoose = require('mongoose')

mongoose.connect('mongodb://localhost/blog',{})

const Schema = mongoose.Schema;

const Users = new Schema({
    name: {type: String, required: true},
    password:{type:String, required: true},
    email: {type: String, required: true},
    avatar: {type: String},
    token: {type: String}
})

const ArticleComments = new Schema({
  article_id: {type: mongoose.Schema.Types.ObjectId, required: true},
  //内容
  Content:{type: String, required: true},
  user: {
    user_id: {type: mongoose.Schema.Types.ObjectId},
    name: {type: String, required: true},
    avatar:{type: String}
  },
  time: {type: String, required: true}
})


const Articles = new Schema({
  title: {type: String, required: true},
  Content: {type: String, required: true},
  time: {type: Date, required: true, default:Date.now},
  Type:{type:String, required:true},
  Image:{type: String, default:"https://img2.baidu.com/it/u=687836742,1839609064&fm=26&fmt=auto"},
  comments: [{type: Object}]
})


const Comments = new Schema({
  name: {type: String},
  Content: {type: String},
  time: {type: Date},
})


const User = mongoose.model('User',Users)
const ArticleComment = mongoose.model('ArticleComment',ArticleComments)
const Article = mongoose.model('Article', Articles)
const Comment = mongoose.model('Comments', Comments)

module.exports = {
  Article,
  Comment,
  ArticleComment,
  User
}