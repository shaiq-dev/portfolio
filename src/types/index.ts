export type IconType = React.ReactElement<React.SVGAttributes<SVGElement>>

export type VoidCallback = () => void

/**
 * Creates a union of all possible nested paths in an object as dot-separated strings.
 * For example, if you have { user: { name: "John", settings: { theme: "dark" } } },
 * this will give you "user" | "user.name" | "user.settings" | "user.settings.theme"
 */
export type NestedKeys<T, Prefix extends string = ''> = {
  [K in keyof T & string]: T[K] extends object
    ? `${Prefix}${K}` | NestedKeys<T[K], `${Prefix}${K}.`>
    : `${Prefix}${K}`
}[keyof T & string]

export interface IPosition {
  id: string
  role: string
  description: string
  startDate: string
  endDate: string | null
}

export interface IWorkExperience {
  id: string
  company: string
  description: string
  positions: IPosition[]
}

export interface SocialProfile {
  name: string
  handle: `https://${string}`
  icon: IconType
}

export interface ShortPost {
  title: string
  pubDate: string
  link: string
  thumbnail: string
  categories: string[]
}

export interface SearchResult {
  iconUrl: string
  website: string
  cite: string
  href: string
  title: string
}

export type PeoplesQuestion = {
  ask: string
  answer: string
} & (
  | { hasSearchResult: true; searchResult: SearchResult; searchResultGoogleUrl?: string }
  | { hasSearchResult: false }
)

export interface SearchQuery {
  // Hygraph does not allow to use `query` as a name
  query_: string
  href: string
}

export type ActionErrorType = 'input'

export type ActionError =
  | string
  | {
      type: ActionErrorType
      cause: Record<string, string>
    }

export type ActionResponse<T extends Record<string, unknown> = {}> =
  | {
      ok: false
      error: ActionError
    }
  | ({ ok: true } & T)
