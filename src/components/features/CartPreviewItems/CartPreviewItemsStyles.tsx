import styled from 'styled-components'
import { colors } from '../../../colors'

export const CartPreviewContainer = styled.div`
    height: 100%;
    width: 100%;
`
export const CartPreviewItem = styled.div`
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-gap: 10px; 
    font-size: 1rem;
    place-items: center;
    border-top: 1px solid ${colors.lightgray};
    p {
        padding: 0 0.5rem;
    }
`
export const CartPreviewImage = styled.img`
    width: 100%;
    height: 100%;
    padding: 0.5rem;
`

export const CartPreviewAmount = styled.p`
    cursor: pointer;
    display: grid;
    grid-template-rows: repeat(3, 1fr);
    div {
        display: grid;
        place-items: center;
    }
`
