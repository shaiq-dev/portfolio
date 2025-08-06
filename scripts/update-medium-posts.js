/**
 * This scripts fetches all my medium posts from https://api.rss2json.com/
 * and stores them in vercel's kv database. It runs everyday at 12:00 AM,
 * using GitHub Actions cron jobs.
 */
import { kv } from '@vercel/kv'
import 'dotenv/config'

const MEDIUM_IMAGE_CDN_REGEX = /https:\/\/cdn-images-\d\.medium\.com\/[^"]+/

console.log('Starting Medium posts update script')

const fetchMedimPosts = async () => {
  const response = await fetch(process.env.MEDIUM_FEED_API)
  const data = await response.json()
  return data.items
}

const update = async () => {
  const posts = await fetchMedimPosts()
  posts.map(async post => {
    const { description, guid, thumbnail, content, ...fullPost } = post
    const id = guid.split('/').pop()

    console.log(`Processing post: ${id} - ${fullPost.title}`)

    // Description is not required but we need to extract the thumbnail from it.
    // The RSS feed sometimes sends empty string for thumbnails.
    let newThumbnail = thumbnail
    if (thumbnail == null || thumbnail.length < 1) {
      const thumbnailMatch = description.match(MEDIUM_IMAGE_CDN_REGEX)
      newThumbnail = thumbnailMatch ? thumbnailMatch[0] : ''
    }

    const timestamp = Date.parse(fullPost.pubDate) / 1000

    await kv.hset('posts', {
      [id]: { id, ...fullPost, thumbnail: newThumbnail },
    })
    await kv.zadd('posts:update', { score: timestamp, member: id })
  })
}

await update()

console.log('Medium posts update script completed')
