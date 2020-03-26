function setToken(token) {
  localStorage.setItem('token', token)
}

function isLoggedIn() {
  return !!localStorage.getItem('token')
}

function getToken() {
  return localStorage.getItem('token')
}

function logout() {
  localStorage.removeItem('token')
}

export default {
  setToken,
  isLoggedIn, 
  getToken,
  logout
}