import { screen } from '@testing-library/react'
import App from './App'
import { renderWithProviders } from './utils/test-utils'
import { MemoryRouter } from 'react-router-dom'

describe('MyComponent', () => {
  it('should render correctly', () => {
    renderWithProviders(<MemoryRouter><App /></MemoryRouter>)
    expect(screen.getByText(/OnlineMart/i)).toBeInTheDocument()
  })
})
