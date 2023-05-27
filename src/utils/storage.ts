// import SecureLS from 'secure-ls'

// const secureLS = new SecureLS()

const setItem = <T>(key: string, value: T): void => {
  localStorage.setItem(key, JSON.stringify(value))
}

const getItem = (key: string): any => {
  const storedState = localStorage.getItem(key)
  if (!storedState) {
    return null
  }
  try {
    return JSON.parse(storedState)
  } catch (error) {
    return storedState
  }
}

const clear = (): void => {
  localStorage.clear()
}

const storage = {
  setItem,
  getItem,
  clear
}

export default storage
