/**
 * Sends a `GET` request to the vercel build hook to trigger
 * a new deployment.
 */
export const startNewBuild = async () => {
  const hook = process.env.VERCEL_DEPLOYMENT_HOOK
  await fetch(hook)

  console.log(`[Vercel] New build triggered`)
}
