import React from 'react'
import { LogoContainer, LogoInnerContainer } from './LogoStyles'
import { BsFillCartCheckFill } from 'react-icons/bs'

const Logo = (): JSX.Element => {
  return (
    <LogoContainer>
      <LogoInnerContainer>
        <BsFillCartCheckFill/>
        <h2>HappyCart</h2>
      </LogoInnerContainer>
    </LogoContainer>
  )
}

export default Logo
