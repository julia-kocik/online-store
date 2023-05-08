import styled from 'styled-components'
import { colors, variables } from '../../../colors'

export const CheckoutContainer = styled.div`
    min-height: 80vh;
    padding-top: 2rem;
    margin-bottom: 3rem;
`

export const CheckoutInnerContainer = styled.div`
    min-height: 62vh;
    display: grid;
    grid-template-columns: 1fr 1fr;
    column-gap: 1rem;
    width: 80%;
    margin: 0 auto;
    ${variables.tablet} {
        width: 100%;
    }
    ${variables.mobile} {
        grid-template-columns: 1fr;
    }
`
export const CheckoutLeftContainer = styled.div`
    display: grid;
    grid-template-rows: 1fr 2fr;
    row-gap: 1rem;
    ${variables.mobile} {
        margin-bottom: 1rem;
        grid-template-rows: 0.75fr 1.75fr;
    }
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

export const ReturnContainer = styled.div`
    display: grid;
    justify-items: end;   
`

export const CheckoutPersonalDetails = styled.div`
    border-radius: 0.5rem;
    box-shadow: ${variables.boxShadow};
    padding: 1rem 2rem;
    color: ${colors.green};
`

export const CheckoutSummaryContainer = styled.div`
    display: grid;
    grid-template-rows: 1fr 2fr;
    row-gap: 1rem;
    ${variables.mobile} {
        margin-bottom: 1rem;
        grid-template-rows: 1fr 1fr;
    }
`

export const ButtonContainer = styled.div`
    display: grid;
    justify-items: end;
    align-items: center;
    height: 120px;
    width: 100%;
    padding-right: 2rem;
    box-shadow: ${variables.boxShadow};
    border-radius: 0.5rem;
    ${variables.tablet} {
        padding-right: 0;
        justify-items: center;
    }
`
