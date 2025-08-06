'use client'

import { useEffect, useLayoutEffect } from 'react'
import { isSSR } from '@/util/is-ssr'

export const useIsomorphicLayoutEffect = isSSR() ? useEffect : useLayoutEffect
