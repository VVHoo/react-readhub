import { getTopicList } from '../../service/topic'
import { setTopicList, setTopicLoading } from '../actions'

const getTopics = (params) => {
  return (dispatch) => {
    dispatch(setTopicLoading(true))
    getTopicList(params).then(res => {
      dispatch(setTopicList(res.data))
      dispatch(setTopicLoading(false))
    })
  }
}

export {
  getTopics
}
