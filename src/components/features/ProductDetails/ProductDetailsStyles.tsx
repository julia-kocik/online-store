import { type HTMLAttributes } from 'react'
import styled from 'styled-components'
import { colors, variables } from '../../../colors'

export const ProductDetailsTitle = styled.div`
    margin-top: 0.5rem;
`

export const ProductDetailsContainer = styled.div`
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    width: 90vw;
    height: 70vh;
    margin: 1rem 0 3rem 0;
    ${variables.tablet} {
        grid-template-columns: 1fr;
        width: 80vw;
        height: 80vh;
        margin: 1rem 0;
    }
`
export const ProductDetailsLeftContainer = styled.div`
    display: grid;
    grid-template-rows: 1fr;
    height: 94%;
`
interface ImageProps extends HTMLAttributes<HTMLDivElement> {
  url?: string
}

export const ActiveImage = styled.div<ImageProps>`
    background-image: url(${props => props.url});
    background-size: 25%; 
    background-repeat: no-repeat; 
    background-position: center;
    box-shadow: ${variables.boxShadow};
    ${variables.tablet} {
       height: 450px;
    }
`
interface OverlayProps extends HTMLAttributes<HTMLDivElement> {
  color?: string
}
export const Overlay = styled.div<OverlayProps>`
    width: 100%;
    height: 100%;
    background: ${props => props.color ?? ''};
    opacity: 0.3;
`

export const ProductDetailsRightContainer = styled.div`
    display: grid;
    grid-template-rows: fit-content(40%) 10% 10%;
    row-gap: 0.5rem;
    padding: 0 2rem;
    ${variables.mobile} {
        padding: 0;
        grid-template-rows: fit-content(35%) 8% 10% 20%;
    }
    h5 {
        font-size: 24px;
        margin: 0;
    }
`

export const ProductDetailsBox = styled.div`
    border-bottom: 1px solid ${colors.lightgray};
    display: grid;
    h5 {
        align-self: center;
    }
`
export const ProductDetailsButtonBox = styled.div`
    justify-self: end; 
    margin-bottom: 5rem;
`

export const ProductDetailsCounterBox = styled(ProductDetailsBox)`
    border-radius: 1rem;
    background: ${colors.lightgray};
    color: ${colors.darkgray};
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    width: 7rem;
    margin-top: 0.25rem;
    cursor: pointer;
    max-height: 60px;
    div {
        display: grid;
        place-items: center;
    }
`
