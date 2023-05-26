import styled from 'styled-components'
import { variables } from '../../../colors'
import { SlTrash } from 'react-icons/sl'
import { Link } from 'react-router-dom'

export const CartScreenContainer = styled.div`
    padding-top: 2rem;
    min-height: 80vh;
`

export const CartScreenInnerContainer = styled.div`
    display: grid;
    grid-auto-rows: 120px;
    gap: 0.75rem;
    width: 70%;
    margin: 2rem auto;
    ${variables.tablet} {
      width: 100%; 
    }
`
export const CartScreenItemContainer = styled.div`
    box-shadow: ${variables.boxShadow};
    display: grid;
    grid-template-columns: 1fr 3fr 1fr 1fr 0.5fr;
    column-gap: 2rem;
    align-items: center;
    border-radius: 0.5rem;
    span {
        justify-self: center;
    }
    ${variables.tablet} {
        grid-template-columns: 1fr 3fr 1fr 1fr 1fr;
    }
    ${variables.mobile} {
        grid-template-columns: 1fr 10rem 1fr 1fr 3rem;
        overflow-y: hidden;
    }
`
export const CartScreenImage = styled.img`
    width: 5rem;
    height: 5rem;
    padding: 1rem;
`

export const CartRemoveIcon = styled(SlTrash)`
    cursor: pointer;
`

export const CartPreviewAmount = styled.div`
    cursor: pointer;
    display: grid;
    grid-template-rows: repeat(3, 1fr);
    gap: 0.5rem;
    div {
        display: grid;
        place-items: center;
    }
`

export const ButtonContainer = styled(Link)`
    display: grid;
    justify-items: end;
    width: 70%;
    margin: 0 auto 3rem auto;
    text-decoration: none;
    ${variables.tablet} {
      width: 100%;    
    }
`
