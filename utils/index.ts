/**
 * Converts a date to `x time ago` format
 */
export const xTimeAgo = (date: Date) => {
  const units = [
    { name: 'year', seconds: 31536000 },
    { name: 'month', seconds: 2592000 },
    { name: 'day', seconds: 86400 },
    { name: 'hour', seconds: 3600 },
    { name: 'minute', seconds: 60 },
    { name: 'second', seconds: 1 },
  ]

  const elapsedSeconds = Math.floor(
    (new Date().getTime() - date.getTime()) / 1000
  )

  for (const unit of units) {
    const interval = Math.floor(elapsedSeconds / unit.seconds)
    if (interval >= 1) {
      return `${interval} ${unit.name}${interval > 1 ? 's' : ''} ago`
    }
  }

  return 'Not Available'
}

/**
 * Check if we are on server or client
 */
export const isSSR = () =>
  typeof window === 'undefined' ||
  !window.navigator ||
  /ServerSideRendering|^Deno\//.test(window.navigator.userAgent)

/**
 * Returns Date in duration of years.
 * e.g, 1.2 years or 7 months
 */
export const asDuration = (date: Date) => {
  const diff = new Date().getTime() - date.getTime()
  const months = diff / 2630016000
  const monthsLeftAfterYears = Math.floor(months % 12)
  const duration = Math.floor(months / 12) / (monthsLeftAfterYears / 12)

  const format = (count: number, unit: string) =>
    `${unit}${count === 1 ? '' : 's'}`

  if (duration >= 1) {
    return `${duration.toFixed(1)} ${format(duration, 'year')}`
  }

  return duration > 0
    ? `${monthsLeftAfterYears} ${format(monthsLeftAfterYears, 'month')}`
    : 'less than a month'
}
