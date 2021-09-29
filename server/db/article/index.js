const {Article} = require('../server')



// 通过Promise封装
// const saveArticle = function(data) {
//     const article = new Article(data)
//     article.save((error,result) => {
//       if(error) {
//        console.log(error);
//       } else {
//        console.log('插入成功！');
//       }
//     })
//   }
  

// const FindArticle = function(data) {
//   Article.findOne(data,(error, result) => {
//     if(error) {
//      console.log(error);
//     } else {
//       console.log(result);
//     }
// })
// } 

// const AllArticle = function() {
//   Article.find((error,result) => {
//     if(error) {
//       console.log(error);
//     } else {
//     return result;
//     }
//   })
// }

// saveArticle({
//   title:"lili",
//   Content: "lili",
//   time: Date.now(),
//   Type: "JS"
// })
// FindArticle({
//   title:"lili"
// })
// console.log(AllArticle());

// module.exports = {
//   saveArticle,
//   FindArticle,
//   AllArticle
// }