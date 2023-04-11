import React, { useEffect, useState } from 'react'
import { NavlinksContainer, NavlinksLinks, NavlinksList, NavlinksSubList, StyledArrowIcon, StyledRouterLink } from './NavlinksStyles'
import { useDispatch, useSelector } from 'react-redux'
import { type AppDispatch, type RootState } from '../../../redux/store'
import { fetchProducts } from '../../../redux/productSlice'

const Navlinks = (): JSX.Element => {
  const dispatch = useDispatch<AppDispatch>()
  const products = useSelector((state: RootState) => state.products.data)
  const status = useSelector((state: RootState) => state.products.status)
  const error = useSelector((state: RootState) => state.products.error)
  const [visibility, setVisibility] = useState(false)

  useEffect(() => {
    dispatch(fetchProducts())
  }, [dispatch])

  if (status === 'loading') {
    return <div>Loading...</div>
  }

  if (status === 'failed') {
    return <div>Error: {error}</div>
  }

  const toggleVisibility = (): void => {
    setVisibility(!visibility)
  }
  return (
    <NavlinksContainer>
      <NavlinksList>
        <NavlinksLinks>
          Categories
          <NavlinksSubList visibility={visibility ? 'visible' : 'hidden'}>
            {Object.keys(products).map(category => (
              <li key={category}>
                <StyledRouterLink to={`/${category}`}>
                  {category}
                </StyledRouterLink>
              </li>
            ))}
          </NavlinksSubList>
          <StyledArrowIcon onClick={toggleVisibility}/>
        </NavlinksLinks>
      </NavlinksList>
    </NavlinksContainer>
  )
}

export default Navlinks
