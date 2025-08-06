import { useMemo } from 'react'

import { TEXT_CONTENT } from '@/constants'
import type { NestedKeys } from '@/types'

export const useText = () => {
  const t = useMemo(
    () => (path: NestedKeys<typeof TEXT_CONTENT>, subsitutes?: (string | number)[]) => {
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      const value = path.split('.').reduce((obj: any, key) => obj?.[key], TEXT_CONTENT) as string
      if (subsitutes) {
        let idx = 0
        return value.replace(/{}/g, () => {
          return idx < subsitutes.length ? String(subsitutes[idx++]) : '{}'
        })
      }

      return value
    },
    []
  )

  return { t }
}
