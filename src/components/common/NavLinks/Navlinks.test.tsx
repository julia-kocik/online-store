import { MemoryRouter } from 'react-router-dom'
import { renderWithProviders } from '../../../utils/test-utils'
import Navlinks from './Navlinks'
import { fireEvent } from '@testing-library/react'
import { testProducts } from '../../../utils/test-products'

describe('Navlinks component tests', () => {
  const preloadedState = {
    cartState: {
      cart: [{ id: 0, amount: 2 }, { id: 1, amount: 2 }]
    },
    products: {
      data: {
        electronics: testProducts
      },
      status: 'succeeded',
      error: null,
      searchTerm: ''
    }
  }
  it('expext categories title to be in the document', () => {
    // arrange
    const { getByText } = renderWithProviders(<MemoryRouter initialEntries={['/']}><Navlinks/></MemoryRouter>, {})
    const categoriesTitle = getByText(/categories/i)
    expect(categoriesTitle).toBeInTheDocument()
  })
  it('clicking on down icon toggles menu', () => {
    const { getByTestId, getByRole } = renderWithProviders(<MemoryRouter initialEntries={['/']}><Navlinks/></MemoryRouter>, { preloadedState })
    const toggleNavlinksIcon = getByTestId('toggleNavlinksIcon')
    fireEvent.click(toggleNavlinksIcon)
    expect(getByRole('link', { name: /electronics/i })).toBeVisible()
    fireEvent.click(toggleNavlinksIcon)
    expect(getByRole('link', { name: /electronics/i })).not.toBeVisible()
  })
})
