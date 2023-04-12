import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import { type AppDispatch, type RootState } from '../../../redux/store'
import { fetchProducts } from '../../../redux/productSlice'
import { ProductDetailsContainer, ProductDetailsLeftContainer } from './ProductDetailsStyles'

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

  useEffect(() => {
    dispatch(fetchProducts())
  }, [dispatch])
  useEffect(() => {
    console.log(typeof id, category, products)
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
  return (
    <>
        <div>{category} / {activeProduct?.title}</div>
        <ProductDetailsContainer>
            <div>
                <ProductDetailsLeftContainer>
                <div style={{ border: '3px solid pink' }}></div>
                <div style={{ border: '3px solid purple' }}></div>

                </ProductDetailsLeftContainer>
            </div>
            <div style={{ border: '3px solid red' }}></div>
        </ProductDetailsContainer>
    </>
  )
}

export default ProductDetails
