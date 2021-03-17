import React from 'react'

interface IButton {
  text?: string
  onClick: (event: React.MouseEvent<HTMLButtonElement>) => void
}

const Button = (props: IButton) => {
  return (
    <button type='button' onClick={props.onClick}>
      {props.text}
    </button>
  )
}

export default Button
