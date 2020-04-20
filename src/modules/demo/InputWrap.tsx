import React, { ChangeEvent } from 'react'
import withModelBind from './withModelBind'

interface InputProps {
  value: string
  onChange: (value: string) => void
}
const InputWrap: React.FC<InputProps> = ({ value, onChange }) => {
  const handleChange = (e: ChangeEvent<HTMLInputElement>): void => {
    onChange && onChange(e.target.value)
  }
  return (
    <div>
      <input type="text" value={value} onChange={handleChange} />
    </div>
  )
}

export default withModelBind<InputProps>(InputWrap)
