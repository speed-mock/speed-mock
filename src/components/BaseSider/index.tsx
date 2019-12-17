import React from 'react'
import { Layout, Menu } from 'antd'
import { RouteConfigComponentProps, RouteConfig } from 'react-router-config'
import { withRouter } from 'react-router'
import { Link } from 'react-router-dom'
import { isArray } from '../../utils'
import Meta from './Meta'
import styles from './styles.module.scss'

const { Sider } = Layout
const { SubMenu, Item: MenuItem } = Menu

const BaseSider: React.FC<RouteConfigComponentProps> = ({
  route,
  location
}) => {
  const renderRoute = (route: RouteConfig): JSX.Element | null => {
    const { routes, key, meta, hidden, path } = route
    if (hidden) {
      return null
    }
    if (routes && isArray(routes) && routes.length > 0) {
      console.log(meta)
      return (
        <SubMenu key={key} title={<Meta meta={meta} />}>
          {routes.map(item => renderRoute(item))}
        </SubMenu>
      )
    }

    return (
      <MenuItem key={key}>
        {path ? (
          <Link to={path as string}>
            <Meta meta={meta} />
          </Link>
        ) : (
          <Meta meta={meta} />
        )}
      </MenuItem>
    )
  }
  return (
    <Sider className={styles.sider}>
      <div className={styles.logo}>speed</div>
      <Menu
        theme="dark"
        defaultSelectedKeys={[location.pathname]}
        mode="inline"
      >
        {Array.isArray(route) && route.map(item => item && renderRoute(item))}
      </Menu>
    </Sider>
  )
}

export default withRouter(BaseSider)
