import React from "react";
import style from "./header.module.scss";
import { Link, NavLink } from "react-router-dom";

function Header (props) {
  const renderNav = () => {
    const navList = [{ path: '/topics', name: '热门话题' }, { path: '/news', name: '科技动态' }]
    return (
      <div className={style.navLink}>
        {
          navList.map(nav => {
            return (
              <NavLink to={nav.path} key={nav.path} replace activeClassName={style.active} >{nav.name}</NavLink>
            )
          })
        }
      </div>
    )
  }
  return (
    <header>
      <div className={style.content}>
        <Link className={style.logo} to="/topic">
          <img
            src="https://cdn.readhub.cn/static/assets/png/readhub_logo@2x.e5b95388.png"
            alt="logo"
            srcSet="https://cdn.readhub.cn/static/assets/png/readhub_logo@2x.e5b95388.png 1x, https://cdn.readhub.cn/static/assets/png/readhub_logo@2x.e5b95388.png 2x" />
        </Link>
        { renderNav() }
      </div>
    </header>
  )
}

export default Header
