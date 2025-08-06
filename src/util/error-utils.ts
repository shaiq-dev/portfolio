import { ActionError, ActionResponse } from '@/types'

export const ThrowActionError = (e: ActionError): ActionResponse => {
  return {
    ok: false,
    error: e,
  }
}
