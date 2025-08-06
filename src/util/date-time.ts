/**
 * Converts a date to `x time ago` format, e.g, "1 month ago"
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

  const elapsedSeconds = Math.floor((new Date().getTime() - date.getTime()) / 1000)

  for (const unit of units) {
    const interval = Math.floor(elapsedSeconds / unit.seconds)
    if (interval >= 1) {
      return `${interval} ${unit.name}${interval > 1 ? 's' : ''} ago`
    }
  }

  return 'Not Available'
}

/**
 * Returns Date as duration.
 * e.g, 1.2 years or 7 months
 */
export const asDuration = (date: Date) => {
  const now = new Date()
  const diffInMilliseconds = Math.abs(now.getTime() - date.getTime())
  const diffInYears = diffInMilliseconds / (1000 * 60 * 60 * 24 * 365.25)

  const format = (count: number, unit: string) => `${unit}${count === 1 ? '' : 's'}`

  if (diffInYears >= 1) {
    const years = Math.floor(diffInYears)
    const months = Math.round((diffInYears - years) * 12)
    return `${years} ${format(years, 'year')} and ${months} ${format(months, 'month')}`
  }

  const months = Math.round(diffInYears * 12)
  return `${months} ${format(months, 'month')}`
}
