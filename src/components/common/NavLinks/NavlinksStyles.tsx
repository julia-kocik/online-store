import { IoIosArrowDown } from 'react-icons/io'
import styled from 'styled-components'
import { colors } from '../../../colors'
import { type HTMLAttributes } from 'react'
import { Link } from 'react-router-dom'

export const NavlinksContainer = styled.div`
  flex: 0 0 45%;
  color: ${colors.green};
`
export const NavlinksList = styled.ul`
  list-style-type: none;
  margin: 0;
  padding: 0;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: end;
  padding-right: 1rem;
`

export const NavlinksLinks = styled.li`
    text-decoration: none;
    display: flex;
    align-items: center;
    position: relative;
`

interface NavlinksSubListProps extends HTMLAttributes<HTMLUListElement> {
  visibility?: string
}

export const NavlinksSubList = styled.ul<NavlinksSubListProps>`
  position: absolute;
  list-style-type: none;
  top: 1.5rem;
  right: 0;
  background: ${colors.green};
  color: ${colors.white};
  padding: 0.5rem 0.75rem;
  width: 150%;
  border-radius: 0.5rem;
  transition: opacity 0.5s ease-in-out;
  opacity: ${props => (props.visibility === 'visible' ? '1' : '0')};
  z-index: 1;
`

export const StyledArrowIcon = styled(IoIosArrowDown)`
  font-size: 1rem;
  margin-left: 0.5rem;
  cursor: pointer;
`

export const StyledRouterLink = styled(Link)`
  color: ${colors.white};
  text-decoration: none;
`
