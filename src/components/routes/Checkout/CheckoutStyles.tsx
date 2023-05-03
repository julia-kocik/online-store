import styled from 'styled-components'
import { colors, variables } from '../../../colors'

export const CheckoutContainer = styled.div`
    min-height: 80vh;
    padding-top: 2rem;
`

export const CheckoutInnerContainer = styled.div`
    min-height: 62vh;
    display: grid;
    grid-template-columns: 1fr 1fr;
    column-gap: 1rem;
    width: 80%;
    margin: 0 auto;
`
export const CheckoutLeftContainer = styled.div`
    display: grid;
    grid-template-rows: 50%;
    row-gap: 1rem;
`
export const CheckoutTotalPrice = styled.div`
    border-radius: 0.5rem;
    box-shadow: ${variables.boxShadow};
    padding: 1rem 2rem;
    color: ${colors.green};
`
export const CheckoutTotalPriceInner = styled.div`
    display: flex;
    justify-content: space-between;
`

export const CheckoutPersonalDetails = styled.div`
    border-radius: 0.5rem;
    box-shadow: ${variables.boxShadow};
`

export const CheckoutSummaryContainer = styled.div`
    border-radius: 0.5rem;
    box-shadow: ${variables.boxShadow};
`

export const ButtonContainer = styled.div`
    display: grid;
    justify-items: end;
    align-items: center;
    height: 130px;
    width: 90%;
`

export const ReturnContainer = styled.div`
    display: grid;
    justify-items: end;
    
`
