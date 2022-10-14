import Cookies from 'js-cookie'

export function setAuth(token: string) {
  return Cookies.set('course_auth', token, { expires: 7 })
}

export function getAuth() {
  return Cookies.get('course_auth')
}