import request from '@/utils/request'


export const userLogin = data => {
  return request({
    method: 'GET',
    url: '/userLogin',
    params:{
      data
    }
  })
}