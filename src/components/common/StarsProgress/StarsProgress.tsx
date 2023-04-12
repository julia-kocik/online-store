import React from 'react'
import { Star, StarsProgressContainer } from './StarsProgressStyles'

interface StarsProgressProps {
  rating: number
}

const MAX_RATING = 5

const StarsProgress = (props: StarsProgressProps): JSX.Element => {
  const renderStars = (): JSX.Element[] => {
    const stars: JSX.Element[] = []

    for (let i = 0; i < MAX_RATING; i++) {
      const starClass = i < props.rating ? 'active' : ''

      stars.push(
        <Star
          key={i}
          className={starClass}
        >
          ★
        </Star>
      )
    }

    return stars
  }

  return (
    <StarsProgressContainer>
      {renderStars()}
    </StarsProgressContainer>
  )
}

export default StarsProgress
