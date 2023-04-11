import { type HTMLAttributes } from 'react'
import styled from 'styled-components'
import { colors, variables } from '../../../colors'

export const ProductContainer = styled.div`
    height: 400px;
    border-radius: 0.5rem;
    box-shadow: ${variables.boxShadow};
`
interface ImageContainerProps extends HTMLAttributes<HTMLDivElement> {
  url?: string
}

export const ImageContainer = styled.div<ImageContainerProps>`
    height: 60%;
    border-radius: 0.5rem;
    background-image: url(${props => props.url});
    background-size: 45%; /* ustawia tło na całkowite wypełnienie przestrzeni */
    background-repeat: no-repeat; /* uniemożliwia tło w powtarzaniu */
    background-position: center;
`

export const ContentContainer = styled.div`
    height: 40%;
    border-top: 2px solid ${colors.lightgray};
`
export const TitleContainer = styled.div`
    display: flex;
    justify-content: space-between;
    height: 40%;
    h5 {
        margin: 1rem;
    }
`
export const RatingContainer = styled.div`
    height: 20%;
    display: flex;
    justify-content: start;
    padding-left: 1rem;
    span {
        font-size: 0.75rem;
    }
`
export const ButtonContainer = styled.div`
    height: 40%;
    display: flex;
    justify-content: end;
    align-items: start;
    padding-right: 1rem;
`
