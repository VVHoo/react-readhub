import React from "react";
import style from "./header.module.scss";

function Header (props) {
  return (
    <header>
      <div className={style.content}>
        <div className="nav-link">
          <span onClick={() => props.history.replace("/topic")}>热门话题</span>
          <span onClick={() => props.history.replace("/news")}>科技动态</span>
          <span>技术资讯</span>
        </div>
      </div>
    </header>
  )
}

export default Header
