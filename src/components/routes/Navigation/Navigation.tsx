import React from 'react'
import { Outlet } from 'react-router-dom'

const Navigation = (): JSX.Element => {
  return (
    <div>
        Navigation
        <Outlet/>
    </div>
  )
}

export default Navigation
