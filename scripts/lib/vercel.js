/**
 * Sends a `GET` request to the vercel build hook to trigger
 * a new deployment.
 */
export const startNewBuild = async () => {
  const hook = process.env.VERCEL_DEPLOYMENT_HOOK
  await fetch(hook)

  console.log(`[Vercel] New build triggered`)
}

/**
 * Vercel KV db utils
 */
export const kv = async (command, key, options = '') => {
  const base =
    process.env.KV_BASE_URL || 'https://grown-yeti-45482.kv.vercel-storage.com'
  const authHeader = `Bearer ${
    process.env.KV_AUTH ||
    'AbGqASQgNmUxYzE3MjYtOTc4Ny00MWU4LWE2MjAtNzEwZTRjOGY5ZTJlYWU5ZGVhZjU0ZDE3NDA4MWI0MTRiYjFkMDIwYzI3NzE='
  }`

  console.log({ base, authHeader })

  const resp = await fetch(`${base}/${command}/${key}/${options}`, {
    headers: { Authorization: authHeader },
  })
  const json = await resp.json()
  return json.result
}
