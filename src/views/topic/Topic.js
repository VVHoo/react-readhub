import React, {useEffect, useState} from 'react'
import TopicItem from '../../components/TopicItem/TopicItem'
import { connect } from 'react-redux'
import { getTopics } from '../../redux/async-actions/topic'
import style from './topic.module.scss'

function Topic (props) {
  const { topicList } = props
  const { getTopicListDataDispatch } = props
  const [loading, setLoading] = useState(false)
  useEffect(() => {
    if (!topicList.length) {
      getTopicListDataDispatch({ pageSize: 20, lastCursor: '' })
    }
  }, [getTopicListDataDispatch, topicList.length])
  
  function loadMore () {
    setLoading(true)
    const params = {
      pageSize: 20,
      lastCursor: topicList[topicList.length - 1].order
    }
    getTopicListDataDispatch(params)
    setLoading(loading => !loading)
  }
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
          <div className="loading">
            <div className={style.listButtonFix}>
              {
                loading ? <img alt="loading" className={style.loadingIcon} src="https://cdn.readhub.cn/static/assets/gif/loading.a8b13f8f.gif" /> :
                <div className={style.listButton} onClick={() => loadMore()}>加载更多</div>
              }
            </div>
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
    getTopicListDataDispatch(params) {
      dispatch(getTopics(params));
    }
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(React.memo(Topic))
