import React from 'react'
import { Outlet } from 'react-router-dom'
import { NavigationContainer } from './NavigationStyles'

const Navigation = (): JSX.Element => {
  return (
    <div>
        <NavigationContainer>

        </NavigationContainer>
        <Outlet/>
    </div>
  )
}

export default Navigation
