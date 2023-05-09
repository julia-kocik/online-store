import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import { type AppDispatch, type RootState } from '../../../../redux/store'
import { fetchProducts } from '../../../../redux/productSlice'
import Product from '../../Product/Product'
import { ProductsContainer } from '../CategoriesStyles'
import { StyledLink } from '../../../../GlobalStyles'

const Category = (): JSX.Element => {
  const { category } = useParams()
  const dispatch = useDispatch<AppDispatch>()
  const products = useSelector((state: RootState) => state.products?.data)
  const status = useSelector((state: RootState) => state.products?.status)
  const error = useSelector((state: RootState) => state.products?.error)

  useEffect(() => {
    dispatch(fetchProducts())
  }, [dispatch])

  if (status === 'loading') {
    return <div>Loading...</div>
  }

  if (status === 'failed') {
    return <div>Error: {error}</div>
  }
  // to fix
  const arrayOfProducts: any = products[category ?? '']
  if (!arrayOfProducts) {
    return <h3>
      <StyledLink to='/'>There is no product with these params, check your link or go back to homepage.</StyledLink>
    </h3>
  }
  return (
    <div>
      <h3>{category === 'jewelery' ? 'jewellery' : category}</h3>
      <div>
      <ProductsContainer>
        {arrayOfProducts.map(item => (
          <Product key={item.id} {...item}/>
        ))}
        </ProductsContainer>
    </div>
    </div>
  )
}

export default Category
