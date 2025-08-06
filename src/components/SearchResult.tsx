import type { SearchResult as ISearchResult } from '@/types'

export interface Props extends ISearchResult {}

const SearchResult = ({ website, iconUrl, cite, href, title }: Props) => {
  return (
    <a href={href} target="_blank" rel="noreferrer">
      <div className="inline-block">
        <div className="flex items-center">
          <div className="mr-3 grid size-[26px] place-items-center rounded-full border border-solid border-[#ecedef] bg-[#f1f3f4] align-middle">
            <img className="size-5" src={iconUrl} />
          </div>
          <div>
            <div className="block whitespace-nowrap text-sm leading-5 text-heading">{website}</div>
            <div className="text-[12px] leading-[18px] text-ash-300">{cite}</div>
          </div>
        </div>
      </div>
      <div />
      <div className="_google-link">{title}</div>
    </a>
  )
}

export default SearchResult
