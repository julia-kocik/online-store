import React from 'react'
import {
  createBrowserRouter,
  RouterProvider
} from 'react-router-dom'
import Home from './components/routes/Home/Home'
import Navigation from './components/routes/Navigation/Navigation'
import Category from './components/features/Categories/Category/Category'
import NotFound from './components/common/NotFound/NotFound'
import ProductDetails from './components/features/ProductDetails/ProductDetails'
import CartScreen from './components/routes/CartScreen/CartScreen'
import Checkout from './components/routes/Checkout/Checkout'

export const router = createBrowserRouter([
  {
    path: '/',
    element: <Navigation />,
    children: [
      {
        index: true,
        element: <Home />
      },
      {
        path: 'cart',
        element: <CartScreen />
      },
      {
        path: 'checkout',
        element: <Checkout />
      },
      {
        path: '/:category',
        children: [
          {
            index: true,
            element: <Category />
          },
          {
            path: ':id',
            element: <ProductDetails />
          }
        ]
      },
      {
        path: '*',
        element: <NotFound />
      }
    ]
  }
])

const App = (): JSX.Element => {
  return (
      <RouterProvider router={router} />
  )
}

export default App
