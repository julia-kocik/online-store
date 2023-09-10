import React from 'react'
import { StarsProgressContainer, Star } from './StarsProgressStyles'

interface StarsProgressProps {
  rating: number
}

const StarsProgress = ({ rating }: StarsProgressProps): JSX.Element => (
  <StarsProgressContainer>
    {[...Array(5)].map((_, index) => (
      <Star key={index} className={index < rating ? 'active' : ''}>
        ★
      </Star>
    ))}
  </StarsProgressContainer>
)

export default StarsProgress
