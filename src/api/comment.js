import request from '@/utils/request'


export const allComments = () => {
  return request({
    method: 'GET',
    url: '/AllComments'
  })
}