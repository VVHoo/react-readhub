import React from "react";
import style from "./topicitem.module.scss"
import { Link } from "react-router-dom";
import { fromNowFormat } from '../../utils/timeFormat'

function TopicItem (props) {
  const { title, id, createdAt, summary } = props
  const getUrl = (id) => {
    return `/topic/${id}`
  }
  return (
    <div className={style.topicItem}>
      <h2 className={style.topicTitle}>
        <Link target="_blank" rel="noopener noreferrer" to={getUrl(id)}>
          {title}
        </Link>
        <span className={style.time}>{fromNowFormat(createdAt)}</span>
      </h2>
      <div className={style.summary}>{summary}</div>
    </div>
  )
}

export default React.memo(TopicItem)
