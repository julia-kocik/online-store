import React, { useEffect, useRef, useState } from 'react'
import { NavlinksContainer, NavlinksLinks, NavlinksList, NavlinksSubList, StyledArrowIcon, StyledRouterLink } from './NavlinksStyles'
import { useDispatch, useSelector } from 'react-redux'
import { type AppDispatch, type RootState } from '../../../redux/store'
import { fetchProducts } from '../../../redux/productSlice'

const Navlinks = (): JSX.Element => {
  const dispatch = useDispatch<AppDispatch>()
  const products = useSelector((state: RootState) => state.products?.data)
  const status = useSelector((state: RootState) => state.products?.status)
  const error = useSelector((state: RootState) => state.products?.error)
  const [visibility, setVisibility] = useState(false)
  const ref = useRef<HTMLUListElement>(null)
  useEffect(() => {
    dispatch(fetchProducts())
  }, [dispatch])

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent): void => {
      if (ref.current && !ref.current.contains(event.target as Node)) {
        setVisibility(false)
      }
    }

    document.addEventListener('mousedown', handleClickOutside)
    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [ref])

  if (status === 'failed') {
    alert(error ?? 'An Error occured, please try again later')
  }

  const toggleVisibility = (): void => {
    setVisibility(!visibility)
  }
  return (
    <NavlinksContainer>
      <NavlinksList>
        <NavlinksLinks>
          Categories
          <NavlinksSubList ref={ref} visibility={visibility ? 'visible' : 'hidden'}>
            {Object.keys(products || {})?.map(category => (
              <li key={category}>
                <StyledRouterLink to={`/${category}`} visibility={visibility ? 'visible' : 'hidden'}>
                  {category === 'jewelery' ? 'jewellery' : category}
                </StyledRouterLink>
              </li>
            ))}
          </NavlinksSubList>
          <StyledArrowIcon data-testid="toggleNavlinksIcon" onClick={toggleVisibility}/>
        </NavlinksLinks>
      </NavlinksList>
    </NavlinksContainer>
  )
}

export default Navlinks
