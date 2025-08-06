import { useMemo } from 'react'

import { content } from '@/constants/content'
import type { NestedKeys } from '@/types'

export const useText = () => {
  const t = useMemo(
    () => (path: NestedKeys<typeof content>, subsitutes?: (string | number)[]) => {
      let value = path.split('.').reduce((obj: any, key) => obj?.[key], content) as string
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
