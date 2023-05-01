import styled from 'styled-components'
import { colors, variables } from '../../../colors'
import { SlTrash } from 'react-icons/sl'

export const CartScreenContainer = styled.div`
    border-top: 1px solid ${colors.lightgray};
    min-height: 80vh;
    display: grid;
    grid-template-rows: auto;
    gap: 0.75rem;
    width: 70%;
    margin: 2rem auto;
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
`
export const CartScreenImage = styled.img`
    width: 5rem;
    height: 5rem;
    padding: 1rem;
`

export const CartRemoveIcon = styled(SlTrash)`
    cursor: pointer;
`