import request from '@/utils/request'



//所有评论
export const allComments = () => {
  return request({
    method: 'GET',
    url: '/AllComments'
  })
}

// 评论
export const saveComment = (Content, name) => {
  return request({
    method: 'POST',
    url: '/saveComment',
    params:{
      name,
      Content
    }
  })
}