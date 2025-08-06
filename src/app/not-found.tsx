import { Metadata } from 'next'

import { NotFound } from './not-found-client'

export const metadata: Metadata = {
  title: 'Error 404 (Not Found)!!1',
}

export default function NotFoundPage() {
  return <NotFound />
}
