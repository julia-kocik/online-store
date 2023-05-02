import React from 'react'
import { ButtonStyles } from './ButtonStyles'

interface ButtonProps {
  title: string
  color?: string
  background?: string
  borderColor?: string
  height?: string
  fontSize?: string
  disabled?: boolean
  onClickHandler?: () => void
}

const Button: React.FC<ButtonProps> = ({ title, color, background, borderColor, fontSize, height, onClickHandler }): JSX.Element => {
  return (
    <ButtonStyles onClick={onClickHandler} height={height} fontSize={fontSize} color={color} background={background} borderColor={borderColor}>{title}</ButtonStyles>
  )
}

export default Button
