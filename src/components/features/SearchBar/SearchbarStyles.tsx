import styled from 'styled-components'
import { colors } from '../../../colors'
import { BsSearch } from 'react-icons/bs'

export const SearchbarContainer = styled.div`
    color: #fff;
    flex: 0 0 30%;
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
`

export const StyledSearchInput = styled.input`
  border-radius: 20px;
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
