import service from '@/utils/request'
export function login (data) {
  return service({
    url: '/login',
    method: 'post',
    data
  })
}

export function getUserInfo (token) {
  return service({
    url: '/getUserInfo',
    method: 'get',
    params: { token }
  })
}
