import React from 'react'
import { Spin } from 'antd'

const Loading: React.FC = () => {
  return (
    <div style={{ textAlign: 'center' }}>
      <Spin spinning></Spin>
    </div>
  )
}

export default Loading
