import styled from 'styled-components'
import { colors } from '../../../colors'

export const LogoContainer = styled.div`
  background-color: ${colors.white};
  border: 1px solid ${colors.green};
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
  }
`