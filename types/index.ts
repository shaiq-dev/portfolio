import { DefaultTheme, ThemedCssFunction } from 'styled-components'

export interface CompanyPosition {
  id: string
  role: string
  startDate: string
  endDate: string | null
  description: string
}

export type WorkExperience = {
  id: string
  company: string
  description: string
  positions: CompanyPosition[]
}

export type MediumShortPost = {
  title: string
  pubDate: string
  link: string
  thumbnail: string
  categories: string[]
}

export type InterpolatedCss = ReturnType<ThemedCssFunction<DefaultTheme>>
