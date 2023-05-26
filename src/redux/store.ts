import { combineReducers, configureStore } from '@reduxjs/toolkit'
import productReducer from './productSlice'
import cartReducer from './cartSlice'
import { loadState } from './browser-storage'
// import storage from 'redux-persist/lib/storage'
// import { persistReducer, persistStore } from 'redux-persist'

// const persistConfig = {
//   key: 'root',
//   storage
// }

const rootReducer = combineReducers({
  products: productReducer,
  cartState: cartReducer
})

// const persistedReducer = persistReducer(persistConfig, rootReducer)

export const store = configureStore({
  reducer: rootReducer,
  devTools: process.env.NODE_ENV !== 'production',
  preloadedState: loadState()
})

// export const persistor = persistStore(store)

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
