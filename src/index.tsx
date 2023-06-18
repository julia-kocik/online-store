import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import reportWebVitals from './reportWebVitals'
import { store } from './redux/store'
// import { PersistGate } from 'redux-persist/integration/react'
import { Provider } from 'react-redux'
import { Elements } from '@stripe/react-stripe-js'
import { stripePromise } from './stripe/stripe.utils'
import GlobalStyles from './GlobalStyles'
import Topbar from './components/features/TopBar/Topbar'
import { saveState } from './redux/browser-storage'
import { debounce } from 'debounce'
import { BrowserRouter as Router } from 'react-router-dom'

store.subscribe(
  // we use debounce to save the state once each 800ms
  // for better performances in case multiple changes occur in a short time
  debounce(() => {
    saveState(store.getState())
  }, 800)
)

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
)
root.render(
  <React.StrictMode>
    <Router>
     <Provider store={store}>
      {/* <PersistGate loading={null} persistor={persistor}> */}
        <Elements stripe={stripePromise}>
          <Topbar/>
          <GlobalStyles />
          <App />
        </Elements>
      {/* </PersistGate> */}
    </Provider>
    </Router>
  </React.StrictMode>
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()
