import React from 'react'
import { ButtonStyles } from './ButtonStyles'

interface ButtonProps {
  title: string
}

const Button: React.FC<ButtonProps> = ({ title }): JSX.Element => {
  return (
    <ButtonStyles>{title}</ButtonStyles>
  )
}

export default Button
