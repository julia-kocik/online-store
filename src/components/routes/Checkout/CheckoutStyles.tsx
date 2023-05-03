import styled from 'styled-components'

export const CheckoutContainer = styled.div`
    border: 3px solid red;
    min-height: 80vh;
`

export const CheckoutInnerContainer = styled.div`
    border: 3px solid orange;
    min-height: 60vh;
    display: grid;
    grid-template-columns: 1fr 1fr;
`
export const CheckoutLeftContainer = styled.div`
    border: 3px solid blue;
    display: grid;
    grid-template-rows: 50%;
`
export const CheckoutTotalPrice = styled.div`
    border: 3px solid yellow;
`

export const CheckoutPersonalDetails = styled.div`
    border: 3px solid yellow;
`

export const CheckoutSummaryContainer = styled.div`
    border: 3px solid green;
`

export const ButtonContainer = styled.div`
    display: grid;
    justify-items: end;
    width: 70%;
    margin: 0 auto 3rem auto;
`
