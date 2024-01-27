import { NextApiRequest, NextApiResponse } from 'next'
import { v4 as uuid } from 'uuid'
import UaParser from 'ua-parser-js'

import { AppContants, AppStrings } from 'constants/index'
import HygraphService from 'services/hygraph'

/**
 * Types for this route
 */

type AllowedFields = 'name' | 'email' | 'subject' | 'message'

/**
 * Validation rules for this route
 */
const ruleFieldCharCount: Record<AllowedFields, [number, number]> = {
  name: [3, 64],
  email: [-1, -1],
  subject: [3, 256],
  message: [3, 1024],
}

/**
 * Validation functions for this route
 */

const validateField = (
  name: AllowedFields,
  value: string | null | undefined
) => {
  if (!value || value.trim() === '') {
    return AppStrings.EMPTY_FIELD_ERROR
  }

  const [min, max] = ruleFieldCharCount[name]

  if (value.length < min || value.length > max) {
    return `This should be ${min} - ${max} characters`
  }

  return null
}

/**
 * `[POST]` Api handler for /connect
 */
const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method !== 'POST') {
    return res.status(405).end(`${req.method} Not Allowed`)
  }

  const requestId = uuid().replaceAll('-', '').toUpperCase()
  const client = JSON.stringify(
    new UaParser(req.headers['user-agent']).getResult()
  ).replaceAll(`"`, `'`)

  try {
    const { body } = req
    const { name, email, subject, message } = JSON.parse(body)

    const fieldError: Record<string, string> = {}
    Object.entries({ name, email, subject, message }).forEach(
      ([k, v]: [string, string]) => {
        switch (k) {
          case 'email':
            {
              !v || v.trim() === ''
                ? (fieldError[k] = AppStrings.EMPTY_FIELD_ERROR)
                : !AppContants.EMAIL_REGEX.test(v) &&
                  (fieldError[k] = AppStrings.INVALID_EMAIL_ERROR)
            }
            break

          default:
            {
              const validationError = validateField(k as AllowedFields, v)
              if (validationError) {
                fieldError[k] = validationError
              }
            }
            break
        }
      }
    )

    if (Object.keys(fieldError).length) {
      return res
        .status(400)
        .json({ sent: false, error: { fieldError }, requestId })
    }

    await HygraphService.getInstance().create(
      'Connect',
      `requestId: "${requestId}", client: "${client}", email: "${email}", message: "${message}", name: "${name}", subject: "${subject}"`
    )

    return res.status(200).json({
      sent: true,
      requestId,
    })
  } catch (err) {
    console.error(`[api/connect] ${err}`)

    HygraphService.getInstance().create(
      'Connect',
      `requestId: "${requestId}", client: "${client}", errorDump: "${JSON.stringify(
        {
          err,
        }
      )}"`
    )

    return res
      .status(500)
      .json({ sent: false, error: AppStrings.SERVER_ERROR, requestId })
  }
}

export default handler
