import React from 'react'
import { LogoContainer, LogoInnerContainer, StyledLogo, StyledRouterLink } from './LogoStyles'

const Logo = (): JSX.Element => {
  return (
    <LogoContainer>
      <LogoInnerContainer>
        <StyledRouterLink to="/">
          <StyledLogo/>
        </StyledRouterLink>
        <h2>HappyCart</h2>
      </LogoInnerContainer>
    </LogoContainer>
  )
}

export default Logo
