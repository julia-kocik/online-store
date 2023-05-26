const KEY = 'redux'
export function loadState (): any {
  try {
    const serializedState = localStorage.getItem(KEY)
    if (!serializedState) return undefined
    return JSON.parse(serializedState)
  } catch (e) {
    return undefined
  }
}

export async function saveState (state: any): Promise<any> {
  try {
    const serializedState = JSON.stringify(state)
    localStorage.setItem(KEY, serializedState)
  } catch (e) {
    // Ignore
  }
}
