'use server'

import HygraphService from '@/services/hygraph'
import { ActionResponse } from '@/types'
import { ThrowActionError } from '@/util/error-utils'
import { hasLength, isEmail } from '@/util/validators'

export interface Input {
  name: string
  email: string
  phone: string | null
  subject: string
  message: string
}

export const submitConnectForm = (input: Input): ActionResponse => {
  const { name, email, phone, subject, message } = input

  if (!hasLength(3, 64, name)) {
    return ThrowActionError('Name must be 3 - 64 characters')
  }

  if (!hasLength(4, 256, subject)) {
    return ThrowActionError('Subject must be 4 - 256 characters')
  }

  if (!hasLength(16, 4056, message)) {
    return ThrowActionError('Message must be 16 - 4056 characters')
  }

  if (!isEmail(email)) {
    return ThrowActionError('Sorry, but thats an invalid email')
  }

  const requestId = crypto.randomUUID().replaceAll('-', '')
  const hygraphService = HygraphService.getInstance()
  hygraphService.create('Connect', {
    requestId,
    client: '',
    name,
    email,
    subject,
    message,
  })

  return { ok: true }
}
