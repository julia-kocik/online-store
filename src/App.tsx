import React from 'react'
import {
  createBrowserRouter,
  RouterProvider
} from 'react-router-dom'
import Home from './components/routes/Home/Home'
import Navigation from './components/routes/Navigation/Navigation'
import Shop from './components/routes/Shop/Shop'
import GlobalStyles from './GlobalStyles'

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
      }
    ]
  }
])

const App = (): JSX.Element => {
  return (
    <div className="App">
      <GlobalStyles />
      <RouterProvider router={router} />
    </div>
  )
}

export default App
