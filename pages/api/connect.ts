import { NextApiRequest, NextApiResponse } from 'next'
import { v4 as uuid } from 'uuid'
import UaParser from 'ua-parser-js'

import { AppStrings } from 'constants/index'
import HygraphService from 'services/hygraph'
import { isEmail, isEmpty, isValidLength } from 'utils/validators'

type AllowedFields = 'name' | 'email' | 'subject' | 'message'

const VALID_FIELD_LENGTH: { [K in AllowedFields]: [number, number] } = {
  name: [3, 64],
  subject: [8, 256],
  message: [16, 4056],
  email: [-1, -1],
}

/**
 * Api handler for contact messages
 */
const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method !== 'POST') {
    return res.status(405).end(`${req.method} Not Allowed`)
  }

  const requestId = uuid().replaceAll('-', '').toUpperCase()
  const client = JSON.stringify(
    new UaParser(req.headers['user-agent']).getResult()
  ).replaceAll(`"`, `'`)

  const hygraphService = HygraphService.getInstance()

  try {
    // Validate request body
    const { name, email, subject, message } = JSON.parse(req.body)

    const fieldError: { [K in AllowedFields]?: string } = {}

    if (isEmpty(email)) {
      fieldError['email'] = AppStrings.EMPTY_FIELD_ERROR
    } else if (!isEmail(email)) {
      fieldError['email'] = AppStrings.INVALID_EMAIL_ERROR
    }

    Object.entries({ name, subject, message }).forEach(
      ([k, v]: [string, string]) => {
        const field = k as AllowedFields
        const bounds = VALID_FIELD_LENGTH[field]
        if (isEmpty(v)) {
          fieldError[field] = AppStrings.EMPTY_FIELD_ERROR
        } else if (!isValidLength(v, bounds)) {
          fieldError[field] = `${k.replace(
            /^./,
            k[0].toUpperCase()
          )} should be ${bounds[0]} - ${bounds[1]} characters`
        }
      }
    )

    if (Object.keys(fieldError).length) {
      return res.status(400).json({
        sent: false,
        error: { field: fieldError },
      })
    }

    await hygraphService.create(
      'Connect',
      `requestId: "${requestId}", client: "${client}", email: "${email}", message: "${message}", name: "${name}", subject: "${subject}"`
    )

    return res.status(200).json({
      sent: true,
      requestId,
    })
  } catch (e) {
    console.error(`[api->connect] ${e}`)

    await hygraphService.create(
      'Connect',
      `requestId: "${requestId}", client: "${client}", errorDump: "${JSON.stringify(
        { e }
      )}"`
    )

    return res
      .status(500)
      .json({ sent: false, error: AppStrings.SERVER_ERROR, requestId })
  }
}

export default handler
