import styled from 'styled-components'
import { colors, variables } from '../../../colors'
import { BsFillCartCheckFill } from 'react-icons/bs'

export const CartPreview = styled.div`
    visibility: hidden;
    min-height: 200px;
    width: 300px;
    position: absolute;
    top: 80px;
    right: 0;
    background: ${colors.white};
    box-shadow: ${variables.boxShadow};
    border-radius: 0.5rem;
`

export const CartContainer = styled.div`
    color: ${colors.green};
    flex: 0 0 10%;
    font-size: 32px;
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
    &:hover ${CartPreview} {
        visibility: visible;
    }
`

export const CartCounterWrapper = styled.div`
    position: relative;
 
`

export const CartCounter = styled.span`
    left: 1.25rem;
    bottom: 1.5rem;
    font-size: 0.75rem;
    color: ${colors.white};
    background: ${colors.green};
    border-radius: 50%;
    height: 1rem;
    width: 1rem;
    text-align: center;
    line-height: 1rem;
    position: absolute;
`

export const CartStyledIcon = styled(BsFillCartCheckFill)`
`
