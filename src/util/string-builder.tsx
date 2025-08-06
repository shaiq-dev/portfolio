import { asDuration } from './date-time'

const defaults = {
  experience: asDuration(new Date(2022, 6, 1)),
}

/**
 * A simple string builder utility to modify constant app strings
 * @example sb("Typescript is {{shoutout}}", {shoutout: "bloated"})
 */
export const sb = (value: string, subsitutes?: Record<string, string>) => {
  if (!value) {
    return ''
  }

  if (!subsitutes) {
    subsitutes = { ...defaults }
  }

  subsitutes = { ...subsitutes, ...defaults }

  return value.replace(/\{\{(\w+)\}\}/g, (match, key) => {
    return subsitutes.hasOwnProperty(key) ? subsitutes[key] : match
  })
}
