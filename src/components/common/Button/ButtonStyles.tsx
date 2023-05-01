import { type HTMLAttributes } from 'react'
import styled from 'styled-components'

interface ButtonProps extends HTMLAttributes<HTMLButtonElement> {
  color?: string
  background?: string
  borderColor?: string
  height?: string
  fontSize?: string
}

export const ButtonStyles = styled.button<ButtonProps>`
    border: ${props => `2px solid ${props.borderColor ?? 'transparent'}`};
    border-radius: 1rem;
    background: ${props => props.background ? props.background : 'transparent'};
    color: ${props => props.color ? props.color : 'black'};
    padding: 0.5rem 1rem;
    height: 2rem;
    font-size: 0.75rem;
    cursor: pointer;
    font-size: ${props => props.fontSize ? props.fontSize : ''};
    height: ${props => props.height ? props.height : ''};
`
