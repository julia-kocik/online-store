import { type HTMLAttributes } from 'react'
import styled from 'styled-components'
import { colors } from '../../../colors'

interface ButtonProps extends HTMLAttributes<HTMLButtonElement> {
  color?: string
  background?: string
  borderColor?: string
  height?: string
  fontSize?: string
}

export const ButtonStyles = styled.button<ButtonProps>`
    border: ${props => `2px solid ${props.borderColor ?? 'transparent'}`};
    border-radius: 0.5rem;
    background: ${props => props.disabled ? 'black' : props.background ? props.background : 'transparent'};
    color: ${props => props.color ? props.color : 'black'};
    padding: 0.5rem 1rem;
    height: 2rem;
    font-size: 0.75rem;
    cursor: pointer;
    font-size: ${props => props.fontSize ? props.fontSize : ''};
    height: ${props => props.height ? props.height : ''};
    transition: 1s all;
    &:hover {
      box-shadow: 0px 0px 5px rgba(0, 0, 0, 0.3);
      background: ${colors.active};
    }
`
