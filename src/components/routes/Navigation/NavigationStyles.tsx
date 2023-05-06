import styled from 'styled-components'
import { colors, variables } from '../../../colors'

export const NavigationContainer = styled.div`
  color: ${colors.white};
  height: 80px;
  width: 100%; 
  display: flex;
  border-bottom: 1px solid ${colors.lightgray};
  margin-top: 1rem;
  ${variables.tablet} {
    width: 96%;
  }
  ${variables.mobile} {
    flex-direction: column;
    height: auto;
    & > * {
      margin-top: 1rem;
    }
  }
`
