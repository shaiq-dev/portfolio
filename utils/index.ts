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
