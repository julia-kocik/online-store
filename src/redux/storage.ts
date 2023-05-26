import SecureLS from 'secure-ls'

const secureLS = new SecureLS()

const setItem = <T>(key: string, value: T): void => {
  secureLS.set(key, value)
}

const getItem = <T>(key: string): T => {
  return secureLS.get(key)
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
