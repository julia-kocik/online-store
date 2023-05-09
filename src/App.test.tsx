import { render, screen } from '@testing-library/react'
import { Provider } from 'react-redux'
import mockStore from './mockStore'
import App from './App'

const store = mockStore({
  myReducer: {
    myData: 'test data'
  }
})

describe('MyComponent', () => {
  it('should render correctly', () => {
    render(
      <Provider store={store}>
        <App />
      </Provider>
    )

    expect(screen.getByText(/OnlineMart/i)).toBeInTheDocument()
  })
})
