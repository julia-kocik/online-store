import styled from 'styled-components'
import { colors, variables } from '../../../colors'

export const CheckoutContainer = styled.div`
    min-height: 80vh;
`

export const CheckoutInnerContainer = styled.div`
    min-height: 60vh;
    display: grid;
    grid-template-columns: 1fr 1fr;
    column-gap: 1rem;
`
export const CheckoutLeftContainer = styled.div`
    display: grid;
    grid-template-rows: 50%;
    row-gap: 1rem;
`
export const CheckoutTotalPrice = styled.div`
    border-radius: 0.5rem;
    box-shadow: ${variables.boxShadow};
`

export const CheckoutPersonalDetails = styled.div`
    border: 3px solid ${colors.lightgray};
    border-radius: 0.5rem;
    box-shadow: ${variables.boxShadow};
`

export const CheckoutSummaryContainer = styled.div`
    border: 3px solid ${colors.lightgray};
    border-radius: 0.5rem;
    box-shadow: ${variables.boxShadow};
`

export const ButtonContainer = styled.div`
    display: grid;
    justify-items: end;
    align-items: center;
    height: 150px;
`
