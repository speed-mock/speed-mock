import React from 'react'
import { createStore, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
import { Router } from 'react-router-dom'
import { renderRoutes } from 'react-router-config'
import moment from 'moment'
import { ConfigProvider } from 'antd'
import zhCN from 'antd/es/locale/zh_CN'

import history from '../history'

import thunk from 'redux-thunk'
import rootReducer from '../rootReducer'

// import Layout from '../Layout'
// import Login from '$modules/Login'

import routes from '../../routes'

moment.locale('zh-ch')

const store = createStore(rootReducer, applyMiddleware(thunk))

const App: React.FC = () => {
  console.log(routes)
  return (
    <ConfigProvider locale={zhCN}>
      <Provider store={store}>
        <Router history={history}>{renderRoutes(routes)}</Router>
      </Provider>
    </ConfigProvider>
  )
}

export default App
