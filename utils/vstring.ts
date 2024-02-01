import { asDuration } from './index'

const vmap = Object.freeze({
  $EXPERIENCE: asDuration(new Date('2022-07-01')),
})

export const vstring = (s: string) => {
  const vregex = /\$[A-Z][_A-Z0-9]*/g
  const vmatch = new Set(s.match(vregex) || [])

  const candidates = Object.keys(vmap)

  vmatch.forEach((match) => {
    if (candidates.includes(match)) {
      s = s.replaceAll(match, vmap[match as keyof typeof vmap])
    }
  })

  return s
}
