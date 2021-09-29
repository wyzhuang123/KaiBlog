import request from '@/utils/request.js'


//获得所有文章
export const AllArticles = () => {
  return request({
      method: 'GET',
      url: '/ALLArticles'
  })
}

//获取文章详情
export const getArticleContent = articleId => {
  return request({
      method: 'GET',
      url: `/getArticleContent/${articleId}`,
  })
}



