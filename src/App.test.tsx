import { screen } from '@testing-library/react'
import App from './App'
import { renderWithProviders } from './utils/test-utils'

describe('MyComponent', () => {
  it('should render correctly', () => {
    renderWithProviders(<App />)
    expect(screen.getByText(/OnlineMart/i)).toBeInTheDocument()
  })
})
