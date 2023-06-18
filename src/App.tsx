import React from 'react'
import { Route, Routes } from 'react-router-dom'

import Home from './components/routes/Home/Home'
import Category from './components/features/Categories/Category/Category'
import NotFound from './components/common/NotFound/NotFound'
import ProductDetails from './components/features/ProductDetails/ProductDetails'
import CartScreen from './components/routes/CartScreen/CartScreen'
import Checkout from './components/routes/Checkout/Checkout'
import Navigation from './components/routes/Navigation/Navigation'

const App = (): JSX.Element => {
  return (
        <>
          <Navigation/>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/cart" element={<CartScreen />} />
            <Route path="/checkout" element={<Checkout />} />
            <Route path="/:category" element={<Category />} />
            <Route path="/:category/:id" element={<ProductDetails />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </>
  )
}

export default App
