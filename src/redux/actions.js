import * as ActionTypes from './action-types'

const setTopicList = (data) => {
  return { type: ActionTypes.SET_TOPIC_LIST, topicList: data }
}
const setTopicLoading = (flag) => {
  return { type: ActionTypes.SET_TOPIC_LOADING, status: flag }
}

export {
  setTopicList,
  setTopicLoading
}
