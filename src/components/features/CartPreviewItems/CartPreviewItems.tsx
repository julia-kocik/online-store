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
    <CartPreviewContainer>
        {cartSample?.map(cartPreviewItem => (
            <CartPreviewItem key={cartPreviewItem.id}>
                <CartPreviewImage src={cartPreviewItem.image} alt={cartPreviewItem.title} />
                <CartPreviewAmount>
                    <div
                      onClick={() => {
                        dispatch(increaseItemQuantity(cartPreviewItem.id))
                      }}>
                      <IoIosArrowUp/>
                    </div>
                    <div>{cartPreviewItem.amount}</div>
                    <div onClick={() => {
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
