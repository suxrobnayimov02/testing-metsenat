import request from '@/utils/request'

export function index(query) {
  return request({
    url: '/sponsor-list/',
    method: 'get',
    params: query
  })
}

export function show(id) {
  return request({
    url: '/sponsor-list/' + id,
    method: 'get'
  })
}

export function globalSearch(query) {
  return request({
    url: '/search',
    method: 'get',
    params: query
  })
}



