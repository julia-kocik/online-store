/* eslint-disable @typescript-eslint/no-misused-promises */
import React, { useEffect, useState } from 'react'
import { ButtonContainer, CheckoutContainer, CheckoutInnerContainer, CheckoutLeftContainer, CheckoutPersonalDetails, CheckoutSummaryContainer, CheckoutTotalPrice, CheckoutTotalPriceInner, ReturnContainer } from './CheckoutStyles'
import Button from '../../common/Button/Button'
import { colors } from '../../../colors'
import { useSelector } from 'react-redux'
import { type RootState } from '../../../redux/store'
import { StyledLink } from '../../../GlobalStyles'
import { BsArrowReturnLeft } from 'react-icons/bs'
import DeliveryForm from '../../features/DeliveryForm/DeliveryForm'
import PaymentForm from '../../features/PaymentForm/PaymentForm'
import { CardElement, useElements, useStripe } from '@stripe/react-stripe-js'

interface initialStateInt {
  name: string
  address: string
  city: string
  zipcode: string
  mobile: string
  email: string
}

const initialState: initialStateInt = {
  name: '',
  address: '',
  city: '',
  zipcode: '',
  mobile: '',
  email: ''
}

const Checkout = (): JSX.Element => {
  const cart = useSelector((state: RootState) => state.cartState.cart)
  const [formState, setFormstate] = useState(initialState)
  const [totalPrice, setTotalPrice] = useState('')
  const [isProcessingPayment, setIsProcessingPayment] = useState(false)
  const stripe = useStripe()
  const elements = useElements()

  useEffect(() => {
    const totalPrice = calculateTotalPrice()
    setTotalPrice(totalPrice)
  }, [])

  const calculateTotalPrice = (): string => {
    return cart.map(cartItem => {
      return cartItem.price * cartItem.amount
    }).reduce((a, b) => a + b, 0).toFixed(2)
  }

  const onChangeHandler = (e): void => {
    setFormstate(formState => {
      return { ...formState, [e.target.name]: e.target.value }
    })
  }

  const onSubmitHandler = async (e): Promise<void> => {
    e.preventDefault()

    if (!stripe || !elements) {
      return
    }

    setIsProcessingPayment(true)
    const response = await fetch('/.netlify/functions/create-payment-intent', {
      method: 'post',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ amount: +totalPrice * 100 })
    }).then(async response => await response.json())

    const clientSecret = response.paymentIntent.client_secret
    const paymentResult = await stripe.confirmCardPayment(clientSecret, {
      payment_method: {
        card: elements.getElement(CardElement) ?? { token: '' },
        billing_details: {
          name: formState.name ? formState.name : 'Guest'
        }
      }
    })

    setIsProcessingPayment(false)

    if (paymentResult.error) {
      alert(paymentResult.error.message)
    } else {
      if (paymentResult.paymentIntent.status === 'succeeded') {
        alert('payment successful')
        elements.getElement(CardElement)?.clear()
      }
    }
  }

  return (
    <CheckoutContainer>
      <CheckoutInnerContainer>
          <CheckoutLeftContainer>
            <CheckoutTotalPrice>
              <h3>Review Order and Shipping</h3>
              <CheckoutTotalPriceInner>
                <h4>Total price:</h4>
                <h4>$ {totalPrice}</h4>
              </CheckoutTotalPriceInner>
              <ReturnContainer>
                <StyledLink to='/cart'><BsArrowReturnLeft/></StyledLink>
              </ReturnContainer>
            </CheckoutTotalPrice>
            <CheckoutPersonalDetails>
              <h3>Delivery Information</h3>
              <DeliveryForm onChangeHandler={onChangeHandler}/>
            </CheckoutPersonalDetails>
          </CheckoutLeftContainer>
          <CheckoutSummaryContainer>
            <PaymentForm/>
              {cart.length > 0 && (
              <ButtonContainer>
                <Button disabled={isProcessingPayment} onClickHandler={onSubmitHandler} title='Process payment' color={colors.white} background={colors.green} fontSize='1rem' height='3rem'/>
              </ButtonContainer>
              )}
          </CheckoutSummaryContainer>
      </CheckoutInnerContainer>
    </CheckoutContainer>
  )
}

export default Checkout
