import React from 'react'
import { Outlet } from 'react-router-dom'
import Logo from '../../common/Logo/Logo'
import Navlinks from '../../common/NavLinks/Navlinks'
import CartIcon from '../../features/CartIcon/CartIcon'
import Searchbar from '../../features/SearchBar/SearchBar'
import { NavigationContainer } from './NavigationStyles'

const Navigation = (): JSX.Element => {
  return (
    <>
        <NavigationContainer>
          <Logo/>
          <Navlinks/>
          <Searchbar/>
          <CartIcon/>
        </NavigationContainer>
        <Outlet/>
    </>
  )
}

export default Navigation
