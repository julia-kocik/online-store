import styled from 'styled-components'
import { colors } from '../../../colors'
import { MdOutlineStorefront } from 'react-icons/md'
import { Link } from 'react-router-dom'

export const LogoContainer = styled.div`
  background-color: ${colors.white};
  color: ${colors.green};
  flex: 0 0 15%;
  display: flex;
  justify-content: center;
  align-items: center;
`
export const LogoInnerContainer = styled.div`
  height: 100%;
  display: flex;
  align-items: center;
  h2 {
    padding-left: 10px;
    font-size: 24px;
  }
`
export const StyledLogo = styled(MdOutlineStorefront)`
  font-size: 48px;
`
export const StyledRouterLink = styled(Link)`
  text-decoration: none;
  color: ${colors.green};
`
