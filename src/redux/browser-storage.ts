const KEY = 'redux'
export function loadState <T> (): T | undefined {
  try {
    const serializedState = localStorage.getItem(KEY)
    if (!serializedState) return undefined
    return JSON.parse(serializedState)
  } catch (e) {
    // Ignore
  }
}

export async function saveState <T> (state: T): Promise<void> {
  try {
    const serializedState = JSON.stringify(state)
    localStorage.setItem(KEY, serializedState)
  } catch (e) {
    // Ignore
  }
}
