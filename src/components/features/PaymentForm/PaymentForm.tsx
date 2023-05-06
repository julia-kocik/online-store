import React from 'react'
import { PaymentFormContainer, StyledCardElement } from './PaymentFormStyles'

const PaymentForm = (): JSX.Element => {
  return (
    <PaymentFormContainer>
      <div>
        <StyledCardElement/>
        <span>Test card: 4242 4242 4242 4242 Date: 04/24 CSV: 424 Zip: 42424</span>
      </div>
    </PaymentFormContainer>
  )
}

export default PaymentForm
