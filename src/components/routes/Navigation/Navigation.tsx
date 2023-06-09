import React from 'react'
import Logo from '../../common/Logo/Logo'
import Navlinks from '../../common/NavLinks/Navlinks'
import CartIcon from '../../features/CartIcon/CartIcon'
import Searchbar from '../../features/SearchBar/SearchBar'
import { NavigationContainer } from './NavigationStyles'
import Footer from '../../features/Footer/Footer'

const Navigation = (): JSX.Element => {
  return (
    <div>
        <NavigationContainer>
          <Logo/>
          <Navlinks/>
          <Searchbar/>
          <CartIcon/>
        </NavigationContainer>
        <Footer/>
    </div>
  )
}

export default Navigation
