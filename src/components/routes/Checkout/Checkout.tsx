import React from 'react'
import { ButtonContainer, CheckoutContainer } from './CheckoutStyles'
import Button from '../../common/Button/Button'
import { colors } from '../../../colors'
import { useSelector } from 'react-redux'
import { type RootState } from '../../../redux/store'

const Checkout = (): JSX.Element => {
  const cart = useSelector((state: RootState) => state.cartState.cart)
  // const [isLoading, setIsLoading] = useState(false)
  return (
    <CheckoutContainer>
      {cart.length > 0 && (
        <ButtonContainer>
          <Button title='Process payment' color={colors.white} background={colors.green} fontSize='1rem' height='3rem'/>
        </ButtonContainer>
      )}
    </CheckoutContainer>
  )
}

export default Checkout
