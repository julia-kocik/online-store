import React from 'react'
import { NavlinksContainer, NavlinksLinks, NavlinksList, StyledArrowIcon } from './NavlinksStyles'

const Navlinks = (): JSX.Element => {
  return (
    <NavlinksContainer>
      <NavlinksList>
        <NavlinksLinks>
          Categories
          <StyledArrowIcon/>
        </NavlinksLinks>
      </NavlinksList>
    </NavlinksContainer>
  )
}

export default Navlinks
