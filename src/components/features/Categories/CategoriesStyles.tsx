import styled from 'styled-components'
import { variables } from '../../../colors'

export const ProductsContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-gap: 3rem;
  margin-bottom: 4rem;

  ${variables.tablet} {
    grid-template-columns: repeat(2, 1fr);
  }

  ${variables.tablet} {
    grid-template-columns: repeat(1, 1fr);
  }
`
