import { type HTMLAttributes } from 'react'
import styled from 'styled-components'
import { variables } from '../../../colors'

export const ProductDetailsTitle = styled.div`
    margin-top: 0.5rem;
`

export const ProductDetailsContainer = styled.div`
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    width: 90vw;
    height: 75vh;
    margin: 1rem 0;
`
export const ProductDetailsLeftContainer = styled.div`
    display: grid;
    grid-template-rows: 3fr 1fr;
    height: 100%;
`
interface ImageProps extends HTMLAttributes<HTMLDivElement> {
  url?: string
}

export const ActiveImage = styled.div<ImageProps>`
    background-image: url(${props => props.url});
    background-size: 35%; 
    background-repeat: no-repeat; 
    background-position: center;
    box-shadow: ${variables.boxShadow};

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

export const ProductsDetailsBottomContainer = styled.div`
    display: grid;
    grid-template-columns: repeat(4, 1fr); 
    column-gap: 0.5rem;   
`

export const SmallImage = styled.div<ImageProps>`
    background-image: url(${props => props.url});
    background-size: 35%; 
    background-repeat: no-repeat; 
    background-position: center;
    margin-top: 0.5rem;
    box-shadow: ${variables.boxShadow};
    cursor: pointer;
`
