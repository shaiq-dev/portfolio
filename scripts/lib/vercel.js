const vercel = {
  /**
   * Wrapper around vercel KV database api
   */
  async kv(command, key, options = '') {
    const KV_BASE_URL = process.env.KV_BASE_URL
    const AUTH_TOKEN = `Bearer ${process.env.KV_AUTH}`

    const resp = await fetch(`${KV_BASE_URL}/${command}/${key}/${options}`, {
      headers: { Authorization: AUTH_TOKEN },
    })
    const json = await resp.json()

    return json.result
  },

  /**
   * Creates a new deployment from the `main` branch
   */
  async deploy() {
    const DEPLOY_HOOK = process.env.VERCEL_DEPLOYMENT_HOOK
    await fetch(DEPLOY_HOOK)
    console.log(`[Vercel] New build triggered`)
  },
}

export default vercel
