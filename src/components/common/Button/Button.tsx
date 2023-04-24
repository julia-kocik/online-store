import React from 'react'
import { ButtonStyles } from './ButtonStyles'

interface ButtonProps {
  title: string
  color?: string
  background?: string
  borderColor?: string
}

const Button: React.FC<ButtonProps> = ({ title, color, background, borderColor }): JSX.Element => {
  return (
    <ButtonStyles color={color} background={background} borderColor={borderColor}>{title}</ButtonStyles>
  )
}

export default Button
