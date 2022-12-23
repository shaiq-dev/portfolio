const HYGRAPH_ENDPOINT = process.env.HYGRAPH_ENDPOINT
const HYGRAPH_TOKEN = process.env.HYGRAPH_TOKEN
const ACTIVE_CONFIG_VERSION = process.env.ACTIVE_CONFIG_VERSION || 'v1'

export const updateCommitCount = async (count) => {
  const query = `
        mutation {
            updateConfiguration(
                where: { version : "${ACTIVE_CONFIG_VERSION}" }
                data: {commitCount: ${count} }
            ) {
                id
            }
        }
    `
  const response = await fetch(HYGRAPH_ENDPOINT, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${HYGRAPH_TOKEN}`,
    },
    body: JSON.stringify({ query }),
  })
  const data = await response.json()

  if (!data.data.updateConfiguration.id) {
    console.error('Error updating commit count')
    return
  }

  console.log('Updated commit count to ', count)
}
