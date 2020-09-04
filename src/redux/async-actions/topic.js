import { getTopicList } from '../../service/topic'
import { setTopicList } from '../actions'

const getTopics = (params) => {
  return (dispatch) => {
    getTopicList(params).then(res => {
      dispatch(setTopicList(res.data))
    })
  }
}

export {
  getTopics
}
