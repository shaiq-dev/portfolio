/**
 * This scripts fetches all my medium posts from https://api.rss2json.com/
 * and stores them in vercel's kv database. It runs everyday at 12:00 AM,
 * using GitHub Actions cron jobs.
 */

import { kv } from '@vercel/kv'

const MEDIUM_IMAGE_CDN_REGEX = /https:\/\/cdn-images-\d\.medium\.com\/[^"]+/
const KV_POSTS_SET = 'posts'

const fetchMedimPosts = async () => {
  const response = await fetch(process.env.MEDIUM_FEED_API)
  const data = await response.json()
  return data.items
}

const update = async () => {
  const posts = await fetchMedimPosts()
  posts.map(async (post) => {
    const { description, guid, thumbnail, content, ...fullPost } = post

    // Description is not required but we need to extract the thumbnail from it.
    // The RSS feed sometimes send empty string for thumbnails.
    let newThumbnail = thumbnail
    if (thumbnail == null || thumbnail.length < 1) {
      const thumbnailMatch = description.match(MEDIUM_IMAGE_CDN_REGEX)
      // If no matches, provide a dummy thumbnail
      newThumbnail = thumbnailMatch ? thumbnailMatch[0] : ''
    }

    const id = guid.split('/').pop()
    const timestamp = Date.parse(fullPost.pubDate) / 1000

    await kv.hset(KV_POSTS_SET, {
      [id]: { id, ...fullPost, thumbnail: newThumbnail },
    })
    await kv.zadd(KV_POSTS_SET + ':update', { score: timestamp, member: id })
  })
}

update()
