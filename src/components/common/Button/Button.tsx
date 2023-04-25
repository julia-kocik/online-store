import React from 'react'
import { ButtonStyles } from './ButtonStyles'

interface ButtonProps {
  title: string
  color?: string
  background?: string
  borderColor?: string
  onClickHandler?: () => void
}

const Button: React.FC<ButtonProps> = ({ title, color, background, borderColor, onClickHandler }): JSX.Element => {
  return (
    <ButtonStyles onClick={onClickHandler} color={color} background={background} borderColor={borderColor}>{title}</ButtonStyles>
  )
}

export default Button
