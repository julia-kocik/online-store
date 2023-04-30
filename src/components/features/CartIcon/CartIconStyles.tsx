import styled from 'styled-components'
import { colors } from '../../../colors'

export const CartContainer = styled.div`
    color: ${colors.green};
    flex: 0 0 10%;
    font-size: 32px;
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
`

export const CartCounter = styled.span`
    position: absolute;
    bottom: 2rem;
    font-size: 1rem;
    right: 1.75rem;
    color: ${colors.white};
    background: ${colors.green};
    border-radius: 50%;
    height: 1.25rem;
    width: 1.25rem;
    text-align: center;
    line-height: 1.25rem;

`
