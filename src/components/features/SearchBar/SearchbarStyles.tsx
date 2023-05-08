import styled from 'styled-components'
import { colors, variables } from '../../../colors'
import { BsSearch } from 'react-icons/bs'

export const SearchbarContainer = styled.div`
    color: #fff;
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
    ${variables.tablet} {
      flex: 0 0 40%;
    }
    ${variables.mobile} {
      margin: 1rem 0;    
    }
`

export const StyledSearchInput = styled.input`
  border-radius: 1rem;
  border-color: transparent;
  outline: none;
  font-size: 18px;
  padding: 0.5rem 1rem;
  background-color: ${colors.lightgray};
  color: ${colors.darkgray};
  width: 100%;
`

export const StyledSearchIcon = styled(BsSearch)`
  font-size: 24px;
  color: ${colors.darkgray};
  position: absolute;
  top: 50%;
  right: 1rem;
  transform: translateY(-50%)
`
