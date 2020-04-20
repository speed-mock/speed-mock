import React, { useState } from 'react'

interface IModel {
  value: string
  onChange: (val: string) => void
}

function withModelBind<T extends IModel>(
  Component: React.ComponentType<T>
): React.FC<Omit<T, keyof IModel>> {
  const WrapedComponent: React.FC<Omit<T, keyof IModel>> = props => {
    const [value, setValue] = useState<string>('')
    const handleChange = (value: string): void => {
      console.log(value)
      setValue(value)
    }
    const handleClick = (): void => {
      setValue(value.substr(0, value.length - 1))
    }
    return (
      <>
        <button onClick={handleClick}>length-1</button>
        <Component
          value={value}
          onChange={handleChange}
          {...(props as T)}
        ></Component>
        <div>{value}</div>
      </>
    )
  }
  return WrapedComponent
}

export default withModelBind
