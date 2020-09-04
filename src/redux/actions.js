import * as ActionTypes from './action-types'

const setTopicList = (data) => {
  return { type: ActionTypes.SET_TOPIC_LIST, topicList: data }
}

export {
  setTopicList
}
