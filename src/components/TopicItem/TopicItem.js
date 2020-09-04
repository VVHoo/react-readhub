import React from "react";
import style from "./topicitem.module.scss"
import { Link } from "react-router-dom";

function TopicItem (props) {
  const { title, id, updatedAt } = props
  const getUrl = (id) => {
    return `/topic/${id}`
  }
  return (
    <div className={style.topicItem}>
      <h2 className={style.topicTitle}>
        <Link target="_blank" rel="noopener noreferrer" to={getUrl(id)}>
          {title}
        </Link>
        <span className={style.time}>{updatedAt}</span>
      </h2>
    </div>
  )
}

export default React.memo(TopicItem)
