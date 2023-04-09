import { IoIosArrowDown } from 'react-icons/io'
import styled from 'styled-components'
import { colors } from '../../../colors'

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
`

export const StyledArrowIcon = styled(IoIosArrowDown)`
  font-size: 24px;
  margin-left: 10px;
  cursor: pointer;
`
