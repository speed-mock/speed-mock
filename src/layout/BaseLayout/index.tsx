import React from 'react'
import { RouteConfigComponentProps, renderRoutes } from 'react-router-config'
import { History } from 'history'

import { Layout as AntdLayout } from 'antd'

import routes from '../../routes'
import BaseHeader from '$components/BaseHeader'
import BaseSider from '$components/BaseSider'

const { Content } = AntdLayout

export interface IProps extends RouteConfigComponentProps {
  history: History
}

const Layout: React.FC<IProps> = ({ route, history }) => {
  console.log(route, history)
  return (
    <AntdLayout style={{ height: '100vh' }}>
      <BaseSider route={routes}></BaseSider>
      <AntdLayout>
        <BaseHeader></BaseHeader>
        <Content>{route && renderRoutes(route.routes)}</Content>
      </AntdLayout>
    </AntdLayout>
  )
}

export default Layout
