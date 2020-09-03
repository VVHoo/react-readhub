import { service as request } from './request'

const api = {
  GetTopicList: '/topic'
}

export function getTopicList (params) {
  return request({
    url: api.GetTopicList,
    method: 'get',
    params: params
  })
}

