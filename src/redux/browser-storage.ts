// import storage from './storage'

import storage from '../utils/storage'

const KEY = 'redux'
export function loadState<T> (): T | undefined {
  try {
    const serializedState = storage.getItem(KEY)
    if (!serializedState) return undefined
    return (serializedState)
  } catch (e) {
    // Ignore
  }
}

export async function saveState <T> (state: T): Promise<void> {
  try {
    const serializedState = state
    storage.setItem(KEY, serializedState)
  } catch (e) {
    // Ignore
  }
}
