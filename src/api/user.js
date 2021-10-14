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


export const hasUser = data => {
  return request({
    method: 'GET',
    url:'/hasUser',
    params: {
      data
    }
  })
}


export const register = data => {
  return request({
    method: 'POST',
    url:'/insertUser',
    params: {
      data
    }
  })
}



export const checkUserLogin = data => {
  return request({
    method: 'POST',
    url: '/checkLogin',
    params:{
      data
    }
  })
}