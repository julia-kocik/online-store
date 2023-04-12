import styled from 'styled-components'

export const StarsProgressContainer = styled.div`
  display: flex;
  justify-content: space-between;
  font-size: 36px;
  color: #ddd;
`

export const Star = styled.span`
  margin-right: 0.5rem;
  cursor: pointer;

  &.active {
    color: #ff9f1c;
  }
`
