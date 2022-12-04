export interface CompanyPosition {
  id: string
  role: string
  startDate: string
  endDate: string | null
  description: string
}

export type WorkExperience = Array<{
  id: string
  company: string
  description: string
  positions: CompanyPosition[]
}>
