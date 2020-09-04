import React, {useEffect} from 'react'
import TopicItem from '../../components/TopicItem/TopicItem'
import { connect } from 'react-redux'
import { getTopics } from '../../redux/async-actions/topic'
import style from './topic.module.scss'

function Topic (props) {
  const { topicList } = props
  const { getTopicListDataDispatch } = props
  useEffect(() => {
    if (!topicList.length) {
      getTopicListDataDispatch()
    }
  }, [getTopicListDataDispatch, topicList.length])
  return (
    <main className={style.main}>
      <div className={style.wrapper}>
        <div className={style.content}>
          <div className={style.itemList}>
            {
              topicList.map(topic => {
                return (
                  <TopicItem {...topic} key={topic.id} />
                )
              })
            }
          </div>
        </div>
      </div>
    </main>
  )
}
const mapStateToProps = (state) => ({
  topicList: state.topicList,
});

const mapDispatchToProps = (dispatch) => {
  return {
    getTopicListDataDispatch() {
      dispatch(getTopics());
    }
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(React.memo(Topic))
