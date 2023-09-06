type GlobalState = {
  searchQuery: string
}

export const setLocalStorageItem = (key: string, value: GlobalState) => {
  localStorage.setItem(key, JSON.stringify(value))
}

export const getLocalStorageItem = (key: string): GlobalState | null => {
  const item = localStorage.getItem(key)
  return item ? JSON.parse(item) : null
}