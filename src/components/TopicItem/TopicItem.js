import React, {useState} from "react";
import style from "./topicitem.module.scss"
import { Link, NavLink } from "react-router-dom";
import { fromNowFormat } from '../../utils/timeFormat'

function TopicItem (props) {
  const { title, id, createdAt, summary, newsArray } = props
  const [isActive, setActive] = useState(false)
  
  const handleChange = () => {
    isActive ? setActive(false) : setActive(true)
  }
  
  const articleList = () => {
    return (
      newsArray.map(news => {
        return (
          <div className={style.articleItem} key={news.id}>
            <NavLink to={news.url} target="_blank" rel="noreferrer noopener">{news.title}</NavLink>
            <div className={style.meta}>{news.siteName}</div>
          </div>
        )
      })
    )
  }
  return (
    <div className={`${style.topicItem} ${isActive ? style.open : ''}`}>
      <div onClick={handleChange}>
        <h2 className={style.topicTitle}>
          <Link target="_blank" rel="noopener noreferrer" to={`/topic/${id}`}>
            {title}
          </Link>
          <span className={style.time}>{fromNowFormat(createdAt)}</span>
        </h2>
        <div className={style.summary}>{summary}</div>
      </div>
      <div className={`${style.collapsePanel} ${isActive ? style.opened : ''}`}>
        <div className={style.content}>
          <div>{ articleList() }</div>
          <div className={style.topicMeta}>
            <Link className={style.topicLink} target="_blank" rel="noopener noreferrer" to={`/topic/${id}`}>
              查看话题<span></span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default React.memo(TopicItem)
