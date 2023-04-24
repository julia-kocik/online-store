import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import { type AppDispatch, type RootState } from '../../../redux/store'
import { fetchProducts } from '../../../redux/productSlice'
import { ActiveImage, Overlay, ProductDetailsBox, ProductDetailsButtonBox, ProductDetailsContainer, ProductDetailsCounterBox, ProductDetailsLeftContainer, ProductDetailsRightContainer, ProductDetailsTitle, ProductsDetailsBottomContainer, SmallImage } from './ProductDetailsStyles'
import Button from '../../common/Button/Button'
import { colors } from '../../../colors'

interface Product {
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

const defaultProduct: Product = {
  id: 0,
  title: '',
  price: 0,
  description: '',
  category: '',
  image: '',
  rating: {
    rate: 0,
    count: 0
  }
}
const ProductDetails = (): JSX.Element => {
  const { id, category } = useParams()
  const dispatch = useDispatch<AppDispatch>()
  const products = useSelector((state: RootState) => state.products.data)
  const status = useSelector((state: RootState) => state.products.status)
  const error = useSelector((state: RootState) => state.products.error)
  const [activeProduct, setActiveProduct] = useState<Product>(defaultProduct)
  const [activeColor, setActiveColor] = useState('')
  const [amount, setAmount] = useState(0)
  useEffect(() => {
    dispatch(fetchProducts())
  }, [dispatch])

  useEffect(() => {
    const idNumber = parseInt(id ?? '')
    const productWithParamsId = products[category ?? '']?.find(item => item.id === idNumber)
    setActiveProduct(productWithParamsId)
  }, [products])

  if (status === 'loading') {
    return <div>Loading...</div>
  }

  if (status === 'failed') {
    return <div>Error: {error}</div>
  }
  const colorsOfProducts = ['green', 'blue', 'orange', 'purple']

  const onColorChange = (color: string): void => {
    setActiveColor(color)
  }

  const increaseAmount = (): void => {
    if (amount < 10) {
      setAmount(amount => amount + 1)
    } else {
      alert('If you are interested in wholesale purchase, please contact support')
    }
  }

  const decreaseAmount = (): void => {
    if (amount > 0) {
      setAmount(amount => amount - 1)
    } else {
      alert('The amount cannot be smaller than 0')
    }
  }
  return (
    <>
        <ProductDetailsTitle>{category} / {activeProduct?.title}</ProductDetailsTitle>
        <ProductDetailsContainer>
          <ProductDetailsLeftContainer>
            <ActiveImage url={activeProduct?.image} onClick={() => onColorChange('')}>
              <Overlay color={activeColor}/>
            </ActiveImage>
            <ProductsDetailsBottomContainer>
              {colorsOfProducts.map(item => (
                <SmallImage onClick={() => onColorChange(item)} key={item} url={activeProduct?.image}><Overlay color={item}/></SmallImage>
              ))}
            </ProductsDetailsBottomContainer>
          </ProductDetailsLeftContainer>
        <ProductDetailsRightContainer>
          <ProductDetailsBox>
            <h3>{activeProduct?.title}</h3>
             <p>{activeProduct?.description}</p>
          </ProductDetailsBox>
          <ProductDetailsBox>
            <h5>$ {activeProduct?.price}</h5>
            </ProductDetailsBox>
          <ProductDetailsCounterBox>
            <div onClick={decreaseAmount}>-</div>
            <div>{amount}</div>
            <div onClick={increaseAmount}>+</div>
          </ProductDetailsCounterBox>
          <ProductDetailsButtonBox>
            <Button title='Add to Cart' color={colors.white} background={colors.green}></Button>
          </ProductDetailsButtonBox>
        </ProductDetailsRightContainer>
        </ProductDetailsContainer>
    </>
  )
}

export default ProductDetails
