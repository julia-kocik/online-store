import styled from 'styled-components'
import { colors } from '../../../colors'
import { Link } from 'react-router-dom'

export const CartPreviewContainer = styled.div`
    height: 100%;
    width: 100%;
`
export const CartPreviewItem = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr 2fr;
    grid-gap: 0.5rem; 
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

export const CartLink = styled(Link)`
    text-decoration: none;
    color: ${colors.white};
    background: ${colors.green};
    width: 100%;
    display: inline-block;
    text-align: center;
    font-size: 1rem;
    border-radius: 0.5rem; 
    padding: 0.25rem;
    border-top-left-radius: 0;
    border-top-right-radius: 0;
`
