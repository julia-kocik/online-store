import { CardElement } from '@stripe/react-stripe-js'
import styled from 'styled-components'
import { colors, variables } from '../../../colors'

export const PaymentFormContainer = styled.div`
    box-shadow: ${variables.boxShadow};
    border-radius: 0.5rem;
    display: flex;
    align-items: center;
    color: ${colors.green};
    div {
        width: 100%;
        padding: 1rem;
    }
    span {
        font-size: 0.75rem;
        display: inline-block;
        width: 100%;
        text-align: end;
    }
`

export const StyledCardElement = styled(CardElement)`
    border: 1px solid ${colors.green};
    padding: 1rem;
    margin-bottom: 0;
`
