import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchProducts } from '../../../redux/productSlice'
import { type AppDispatch, type RootState } from '../../../redux/store'
import { ProductsContainer } from './CategoriesStyles'
import Product from '../Product/Product'

const Categories = (): JSX.Element => {
  const dispatch = useDispatch<AppDispatch>()
  const products = useSelector((state: RootState) => state.products.data)
  const status = useSelector((state: RootState) => state.products.status)
  const error = useSelector((state: RootState) => state.products.error)
  const searchTerm = useSelector((state: RootState) => state.products.searchTerm)

  useEffect(() => {
    dispatch(fetchProducts())
  }, [dispatch])

  if (status === 'loading') {
    return <div>Loading...</div>
  }

  if (status === 'failed') {
    return <div>Error: {error}</div>
  }
  return (
    <div>
      {Object.keys(products).map(category => {
        const productsPerCategory = products[category]
        const filteredProducts = productsPerCategory.filter(item => item.title?.toLowerCase().includes(searchTerm)).slice(0, 4)
        return (
        <div key={category}>
          <h2>{category === 'jewelery' ? 'jewellery' : category}</h2>
          <ProductsContainer>
            {filteredProducts.length > 0
              ? filteredProducts.map(item => (
              <Product key={item.id} {...item}/>
              ))
              : 'There no products with this search term'}
          </ProductsContainer>
        </div>
        )
      }
      )}
    </div>
  )
}

export default Categories
