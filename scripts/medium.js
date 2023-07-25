/**
 * This script optimizes the medium posts delivery to the website
 */

import { kv } from './lib/vercel.js'

// Fetch medium posts from its RSS feed
const _getPosts = async (rssUrl) => {
  return (await (await fetch(rssUrl)).json()).items
}

const posts = await _getPosts(
  process.env.MEDIUM_FEED_API ||
    'https://api.rss2json.com/v1/api.json?rss_url=https://medium.com/feed/@shaiqkar'
)

const postIds = posts
  .map((post) => post.guid)
  .map((url) => url.match(/[^/]+$/)[0])

console.log({ postIds })

const storedPostIds = await kv('smembers', 'medium_post_ids')

const newPosts = postIds.filter((id) => !storedPostIds.includes(id))

console.log({ newPosts })

await kv('sadd', 'medium_post_ids', `${newPosts.join('/')}`)

// Store new posts in hygraph
