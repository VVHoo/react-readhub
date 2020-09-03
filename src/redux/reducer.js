import * as ActionTypes from './action-types'
import {combineReducers} from "redux";

const initialState = {
  topicList: []
}

function combineTopicList (topicList = initialState.topicList, action) {
  switch (action.type) {
    case ActionTypes.SET_TOPIC_LIST:
      return action.topicList;
    default:
      return topicList;
  }
}

const reducer = combineReducers({
  topicList: combineTopicList
})

export default reducer