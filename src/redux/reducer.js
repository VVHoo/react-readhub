import * as ActionTypes from './action-types'
import {combineReducers} from "redux";

const initialState = {
  topicList: [],
  topicLoading: false
}

function combineTopicList (topicList = initialState.topicList, action) {
  switch (action.type) {
    case ActionTypes.SET_TOPIC_LIST:
      if (topicList.length) {
        return topicList.concat(action.topicList)
      } else {
        return action.topicList;
      }
    default:
      return topicList;
  }
}
function combineTopicLoading (loading = initialState.topicLoading, action) {
  switch (action.type) {
    case ActionTypes.SET_TOPIC_LOADING:
      return action.status
    default:
      return loading
  }
}

const reducer = combineReducers({
  topicList: combineTopicList,
  topicLoading: combineTopicLoading
})

export default reducer
