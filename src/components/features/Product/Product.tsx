import React from 'react'
import { ButtonContainer, ContentContainer, ImageContainer, ProductContainer, RatingContainer, TitleContainer } from './ProductStyles'
import Button from '../../common/Button/Button'
import StarsProgress from '../../common/StarsProgress/StarsProgress'

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

const Product: React.FC<ProductProps> = ({ id, title, price, description, category, image, rating }): JSX.Element => {
  const shortTitle = title.split(' ')
  return (
    <ProductContainer>
        <ImageContainer url={image}/>
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
                <Button title='Add To Cart'></Button>
            </ButtonContainer>
        </ContentContainer>
    </ProductContainer>
  )
}

export default Product