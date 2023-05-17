import React from 'react'
import { type AppDispatch, type RootState } from '../../../redux/store'
import { CartLink, CartPreviewAmount, CartPreviewContainer, CartPreviewImage, CartPreviewItem } from './CartPreviewItemsStyles'
import { IoIosArrowDown, IoIosArrowUp } from 'react-icons/io'
import { useDispatch, useSelector } from 'react-redux'
import { cartSlice } from '../../../redux/cartSlice'
const { increaseItemQuantity, decreaseItemQuantity } = cartSlice.actions

const CartPreviewItems = (): JSX.Element => {
  const cart = useSelector((state: RootState) => state.cartState?.cart)
  const dispatch = useDispatch<AppDispatch>()
  const cartSample = cart?.slice(0, 3)

  const calculateTotalPrice = (price, amount): string => {
    return (price * amount).toFixed(2)
  }

  return (
    <CartPreviewContainer data-testid='cart-preview-item'>
        {cartSample?.map(cartPreviewItem => (
            <CartPreviewItem key={cartPreviewItem.id}>
                <CartPreviewImage src={cartPreviewItem.image} alt={cartPreviewItem.title} />
                <CartPreviewAmount>
                    <div
                    data-testid='cart-increase-button'
                      onClick={() => {
                        dispatch(increaseItemQuantity(cartPreviewItem.id))
                      }}>
                      <IoIosArrowUp/>
                    </div>
                    <div data-testid='cart-amount'>{cartPreviewItem.amount}</div>
                    <div data-testid='cart-decrease-button' onClick={() => {
                      dispatch(decreaseItemQuantity(cartPreviewItem.id))
                    }}>
                      <IoIosArrowDown/>
                    </div>
                </CartPreviewAmount>
                <p>${calculateTotalPrice(cartPreviewItem.price, cartPreviewItem.amount)}</p>
            </CartPreviewItem>
        ))}
        {cartSample?.length > 0 && <CartLink to='/cart'><span>{cart?.length > 3 ? 'Show all items' : 'Go to cart' }</span></CartLink>}
    </CartPreviewContainer>
  )
}

export default CartPreviewItems
