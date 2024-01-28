import { AppContants } from 'constants/index'

export const isEmpty = (s: string) => {
  return s == null || s.trim() === ''
}

export const isEmail = (email: string) => {
  return AppContants.EMAIL_REGEX.test(email)
}

export const isValidLength = (s: string, bounds: [number, number]) => {
  const [min, max] = bounds
  return s.length > min && s.length < max
}
