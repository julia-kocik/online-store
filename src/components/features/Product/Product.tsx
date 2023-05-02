import React, { useEffect, useState } from 'react'
import { ButtonContainer, ContentContainer, ImageContainer, ProductContainer, RatingContainer, TitleContainer } from './ProductStyles'
import Button from '../../common/Button/Button'
import StarsProgress from '../../common/StarsProgress/StarsProgress'
import { Link } from 'react-router-dom'
import { colors } from '../../../colors'
import { type AppDispatch, type RootState } from '../../../redux/store'
import { useDispatch, useSelector } from 'react-redux'
import { cartSlice } from '../../../redux/cartSlice'

const { addToCart } = cartSlice.actions

interface ProductProps {
  id: number
  title: string
  price: number
  description: string
  category: string
  image: string
  rating: {
    rate: number
    count: number
  }
}

interface CartItemProps {
  id: number
  title: string
  price: number
  image: string
  amount: number
  color: string
}

const Product: React.FC<ProductProps> = ({ id, title, price, category, image, rating }): JSX.Element => {
  const cartItem: CartItemProps = { id, title, price, image, amount: 1, color: 'white' }
  const shortTitle = title.split(' ')
  const dispatch = useDispatch<AppDispatch>()
  const cart = useSelector((state: RootState) => state.cartState.cart)
  const [isLoading, setIsLoading] = useState(false)

  const handleAction = (action, payload): void => {
    setIsLoading(true)
    try {
      dispatch(action(payload))
      setIsLoading(false)
    } catch (error) {
      console.log('Error updating cart:', error)
    }
  }

  useEffect(() => {
    console.log(cart)
  }, [cart])

  return (
    <ProductContainer>
        <Link to={`/${category}/${id}`}>
          <ImageContainer url={image}/>
        </Link>
        <ContentContainer>
            <TitleContainer>
                <h5>{`${shortTitle[0]} ${shortTitle[1]} ${shortTitle[2]}` }</h5>
                <h5>{price}</h5>
            </TitleContainer>
            <RatingContainer>
                <span>
                    <StarsProgress rating={rating.rate}/>
                </span>
                <span>({rating.count})</span>
            </RatingContainer>
            <ButtonContainer>
                <Button disabled={isLoading} title='Add to Cart' borderColor={colors.black} onClickHandler={() => {
                  handleAction(addToCart, cartItem)
                }}></Button>
            </ButtonContainer>
        </ContentContainer>
    </ProductContainer>
  )
}

export default Product
