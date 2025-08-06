export const debug = (message, ...optionalParams) => {
  if (process.env.DEBUG !== 'true') {
    return
  }

  console.log(message, ...optionalParams)
}
