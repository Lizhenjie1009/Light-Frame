
export function getStorage (key) {
  return window.sessionStorage.getItem(key)
}

export function setStorage (key, value) {
  return window.sessionStorage.setItem(key, value)
}

export function removeStorage (key) {
  return window.sessionStorage.removeItem(key)
}
