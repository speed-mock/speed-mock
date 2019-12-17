import React, { Fragment } from 'react'
import { RouteConfigComponentProps, renderRoutes } from 'react-router-config'

const Empty: React.FC<RouteConfigComponentProps> = ({ route }) => {
  console.log('Empty', route)
  return <Fragment>{route && renderRoutes(route.routes)}</Fragment>
}

export default Empty
