import React from 'react'
import { SearchbarContainer, StyledSearchIcon, StyledSearchInput } from './SearchbarStyles'
import { productsSlice } from '../../../redux/productSlice'
import { type RootState, type AppDispatch } from '../../../redux/store'
import { useDispatch, useSelector } from 'react-redux'
const { setSearchTerm } = productsSlice.actions

const SearchBar = (): JSX.Element => {
  const dispatch = useDispatch<AppDispatch>()
  const searchTerm = useSelector((state: RootState) => state.products?.searchTerm)
  const onChangeHandler = (e): void => {
    dispatch(setSearchTerm(e.target.value?.toLowerCase()))
  }
  return (
    <SearchbarContainer>
        <StyledSearchInput value={searchTerm} type="text" name="search" id="search" placeholder='Search' onChange={onChangeHandler}/>
        <StyledSearchIcon/>
    </SearchbarContainer>
  )
}

export default SearchBar
