import React from 'react'
import { renderRoutes } from 'react-router-config'
import Header from '../components/header/Header'
import style from './home.module.scss'

function Home (props) {
  const { route } = props
  return (
    <div className={style.layout}>
      <Header {...props} />
      { renderRoutes(route.routes) }
    </div>
  )
}
export default React.memo(Home)
