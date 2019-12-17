import React from 'react'
import { Icon } from 'antd'

interface IMeta {
  name?: string
  icon?: string
}

interface IProps {
  meta: IMeta
}

const Meta: React.FC<IProps> = ({ meta }) => {
  const { name, icon } = meta
  return (
    <span>
      {icon && <Icon type={icon} />}
      <span>{name || ''}</span>
    </span>
  )
}

export default Meta
