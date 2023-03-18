const HYGRAPH_ENDPOINT = process.env.HYGRAPH_ENDPOINT
const HYGRAPH_TOKEN = process.env.HYGRAPH_TOKEN
const ACTIVE_CONFIG_VERSION = process.env.ACTIVE_CONFIG_VERSION || 'v1'

const _requestHygraph = async (query) => {
  const response = await fetch(HYGRAPH_ENDPOINT, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${HYGRAPH_TOKEN}`,
    },
    body: JSON.stringify({ query }),
  })
  const data = await response.json()

  return data.data
}

/**
 * Update and publish the latest total GitHub commit
 * count to Hygraph.
 */
export const updateCommitCount = async (count) => {
  const updateQuery = `
        mutation {
            updateConfiguration(
                where: { version : "${ACTIVE_CONFIG_VERSION}" }
                data: {commitCount: ${count} }
            ) {
                id
            }
        }
    `

  const { updateConfiguration } = await _requestHygraph(updateQuery)

  if (!updateConfiguration.id) {
    console.error('Error updating commit count')
    return
  }

  const publishQuery = `
        mutation {
            publishConfiguration(
                where: { id : "${updateConfiguration.id}" },
                to: PUBLISHED
            ) {
                id
            }
        }
    `

  const { publishConfiguration } = await _requestHygraph(publishQuery)

  if (!publishConfiguration.id) {
    console.error('Error publishing commit count')
    return
  }

  console.log('Updated commit count to ', count)
}
