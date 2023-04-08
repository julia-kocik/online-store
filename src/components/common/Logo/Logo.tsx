import React from 'react'
import { LogoContainer, LogoInnerContainer, StyledLogo } from './LogoStyles'

const Logo = (): JSX.Element => {
  return (
    <LogoContainer>
      <LogoInnerContainer>
        <StyledLogo/>
        <h2>HappyCart</h2>
      </LogoInnerContainer>
    </LogoContainer>
  )
}

export default Logo
