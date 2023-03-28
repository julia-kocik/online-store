import React from 'react'
import { Outlet } from 'react-router-dom'
import Logo from '../../common/Logo/Logo'
import Navlinks from '../../common/NavLinks/Navlinks'
import { CartContainer } from '../../features/Cart/CartStyles'
import { SearchbarContainer } from '../../features/SearchBar/SearchbarStyles'
import { NavigationContainer } from './NavigationStyles'

const Navigation = (): JSX.Element => {
  return (
    <div>
        <NavigationContainer>
          <Logo/>
          <Navlinks/>
          <SearchbarContainer/>
          <CartContainer/>
        </NavigationContainer>
        <Outlet/>
    </div>
  )
}

export default Navigation
