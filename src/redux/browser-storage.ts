import storage from './storage'

const KEY = 'redux'
export function loadState<T> (): T | undefined {
  try {
    const serializedState = storage.getItem(KEY)
    if (!serializedState) return undefined
    return serializedState as T
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
