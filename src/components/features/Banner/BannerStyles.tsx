import styled from 'styled-components'
import { variables } from '../../../colors'

export const BannerContainer = styled.div`
    background-image: url('banner.jpeg?${+new Date()}');
    background-size: cover;
    background-position: center;
    height: 330px;
    width: 100%;
    ${variables.tablet} {
      display: none;
    }

    ${variables.tablet} {
      grid-template-columns: repeat(1, 1fr);
      display: none;
    }
`
