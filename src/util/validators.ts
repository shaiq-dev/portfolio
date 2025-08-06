export const hasLength = (min: number, max: number, value?: string) => {
  if (!value) {
    return false
  }

  return value.length >= min && value.length <= max
}

export const isEmail = (value: string) => {
  return /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(value)
}
