import request from '@/utils/request'

export function index(query) {
  return request({
    url: '/auth/login/',
    method: 'post',
    params: query
  })
}




