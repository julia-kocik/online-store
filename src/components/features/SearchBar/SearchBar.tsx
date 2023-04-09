import React from 'react'
import { SearchbarContainer, StyledSearchIcon, StyledSearchInput } from './SearchbarStyles'

const SearchBar = (): JSX.Element => {
  return (
    <SearchbarContainer>
        <StyledSearchInput type="text" name="search" id="search" placeholder='Search Product'/>
        <StyledSearchIcon/>
    </SearchbarContainer>
  )
}

export default SearchBar
