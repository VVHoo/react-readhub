import React, { lazy, Suspense } from 'react'
import { Redirect } from 'react-router-dom'
import BlankLayout from '../layouts/BlankLayout'
import HomeLayout from '../layouts/HomeLayout'

const SuspenseComponent = Component => {
  return (
    <Suspense fallback={null}>
      <Component></Component>
    </Suspense>
  )
}

const TopicComponent = lazy(() => import('../views/topic/Topic'))
const NewsComponent = lazy(() => import('../views/news/News'))

export default [
  {
    component: BlankLayout,
    routes: [
      {
        path: '/',
        component: HomeLayout,
        routes: [
          {
            path: '/',
            exact: true,
            render: () => <Redirect to='/topic' />
          },
          {
            path: '/topic',
            keys: 'topic',
            component: () => SuspenseComponent(TopicComponent)
          },
          {
            path: '/news',
            keys: 'news',
            component: () => SuspenseComponent(NewsComponent)
          }
        ]
      }
    ]
  }
]
