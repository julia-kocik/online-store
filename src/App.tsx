import React from 'react'
import {
  createBrowserRouter,
  RouterProvider
} from 'react-router-dom'
import Topbar from './components/features/TopBar/Topbar'
import Home from './components/routes/Home/Home'
import Navigation from './components/routes/Navigation/Navigation'
import GlobalStyles from './GlobalStyles'
import Category from './components/features/Categories/Category/Category'
import NotFound from './components/common/NotFound/NotFound'
import ProductDetails from './components/features/ProductDetails/ProductDetails'
import CartScreen from './components/features/CartScreen/CartScreen'

const router = createBrowserRouter([
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
    <div className="App">
      <Topbar/>
      <GlobalStyles />
      <RouterProvider router={router} />
    </div>
  )
}

export default App
