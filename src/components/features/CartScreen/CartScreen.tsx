import React from 'react'
import { CartPreviewAmount, CartRemoveIcon, CartScreenContainer, CartScreenImage, CartScreenItemContainer } from './CartScreenStyles'
import { useDispatch, useSelector } from 'react-redux'
import { type AppDispatch, type RootState } from '../../../redux/store'
import { cartSlice } from '../../../redux/cartSlice'
import { IoIosArrowDown, IoIosArrowUp } from 'react-icons/io'
const { increaseItemQuantity, decreaseItemQuantity, removeFromCart } = cartSlice.actions

const CartScreen = (): JSX.Element => {
  const cart = useSelector((state: RootState) => state.cartState.cart)
  const dispatch = useDispatch<AppDispatch>()
  return (
    <CartScreenContainer>
      {cart.map((cartItem) => (
        <CartScreenItemContainer key={cartItem.id}>
            <CartScreenImage src={cartItem.image} alt={cartItem.title} />
            <div>{cartItem.title}</div>
            <CartPreviewAmount>
                    <div onClick={() => {
                      dispatch(increaseItemQuantity(cartItem.id))
                    }}>
                      <IoIosArrowUp/>
                    </div>
                    <div>{cartItem.amount}</div>
                    <div onClick={() => {
                      dispatch(decreaseItemQuantity(cartItem.id))
                    }}>
                      <IoIosArrowDown/>
                    </div>
                </CartPreviewAmount>
            <div>${cartItem.price.toFixed(2)}</div>
            <CartRemoveIcon onClick={() => dispatch(removeFromCart(cartItem.id))}/>
        </CartScreenItemContainer>
      ))}
    </CartScreenContainer>
  )
}

export default CartScreen
