import Loadable from 'react-loadable'

import Loading from '$components/Loading'
// import Empty from './Empty'

import BaseLayout from '../layout/BaseLayout'

import { RouteConfig } from 'react-router-config'

const Login = Loadable({
  loader: () => import('$modules/Login'),
  loading: Loading
})
const Page1 = Loadable({
  loader: () => import('$modules/demo/Page1'),
  loading: Loading
})
const Page2 = Loadable({
  loader: () => import('$modules/demo/Page2'),
  loading: Loading
})

const routes: RouteConfig[] = [
  {
    key: '/login',
    path: '/login',
    exact: true,
    component: Login,
    hidden: true
  },
  {
    key: '/',
    path: '/',
    component: BaseLayout,
    exact: true,
    hidden: true
  },
  {
    path: '/demo',
    key: '/demo',
    component: BaseLayout,
    meta: { name: 'demo', icon: 'home' },
    routes: [
      {
        path: '/demo/page1',
        key: '/demo/page1',
        exact: true,
        component: Page1,
        meta: { name: 'page1', icon: 'home' }
      },
      {
        path: '/demo/page2',
        key: '/demo/page2',
        exact: true,
        component: Page2,
        meta: { name: 'page2', icon: 'home' }
      }
    ]
  }
]

export default routes
