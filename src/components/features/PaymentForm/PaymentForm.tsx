import { CardElement } from '@stripe/react-stripe-js'
import React from 'react'

const PaymentForm = (): JSX.Element => {
  return (
    <div>
        <CardElement/>
    </div>
  )
}

export default PaymentForm
