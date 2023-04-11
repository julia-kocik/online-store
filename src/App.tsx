import React from 'react'
import {
  createBrowserRouter,
  RouterProvider
} from 'react-router-dom'
import Topbar from './components/features/TopBar/Topbar'
import Home from './components/routes/Home/Home'
import Navigation from './components/routes/Navigation/Navigation'
import Shop from './components/routes/Shop/Shop'
import GlobalStyles from './GlobalStyles'
import Category from './components/features/Categories/Category/Category'
import NotFound from './components/common/NotFound/NotFound'

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
        path: 'shop',
        element: <Shop />
      },
      {
        path: '/:category',
        element: <Category />
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
