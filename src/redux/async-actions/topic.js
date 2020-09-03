import { getTopicList } from '../../service/topic'
import { setTopicList } from '../actions'

export default function getTopics (params) {
  return async (dispatch) => {
    const result = await getTopicList(params)
    dispatch(setTopicList, result)
  }
}
