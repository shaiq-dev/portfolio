import { clsx, type ClassValue } from 'clsx'
import { extendTailwindMerge } from 'tailwind-merge'

const extendedMerge = extendTailwindMerge({
  extend: {
    classGroups: {
      shadow: [
        'shadow-search-bar-rest',
        'shadow-search-bar-rest-hover',
        'shadow-search-bar-sticky-hover',
        'shadow-site-header-doodle',
        'shadow-carousel-control',
      ],
    },
  },
})

export const cn = (...args: ClassValue[]) => {
  return extendedMerge(clsx(args))
}
