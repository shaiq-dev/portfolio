import styled from 'styled-components'

import SectionHeading from 'components/SectionHeading'
import SearchIcon from 'assets/icons/search.svg'
import { AppStrings } from 'constants/index'
import dynamic from 'next/dynamic'

export type RelatedSearchItem = {
  // Hygraph does not allow to use `query` as a name
  query_: string
  href: string
}

export type RelatedSearchesProps = {
  items: RelatedSearchItem[]
}

const RelatedSearches = ({ items }: RelatedSearchesProps) => {
  return (
    <div className="with-section-gap">
      <SectionHeading heading={AppStrings.RELATED_SEARCHES_HEADING} />
      <div>
        <RelatedSearchesWrapper>
          {items.map((item, idx) => (
            <SearchItem key={idx} href={item.href}>
              <div className="icon">
                <SearchIcon />
              </div>
              <SearchQuery dangerouslySetInnerHTML={{ __html: item.query_ }} />
            </SearchItem>
          ))}
        </RelatedSearchesWrapper>
      </div>
    </div>
  )
}

export default dynamic(() => Promise.resolve(RelatedSearches), {
  ssr: false,
})

const RelatedSearchesWrapper = styled.div`
  display: grid;
  grid-template-columns: auto auto;
  grid-row-gap: 8px;
  grid-column-gap: 16px;
  padding-top: 28px;
`

const SearchItem = styled.a`
  display: flex;
  align-items: center;
  background-color: #f1f3f4;
  border-radius: 100px;
  box-sizing: border-box;
  max-height: none;
  min-height: 48px;
  padding-left: 17px;
  padding-right: 17px;
  position: relative;
  cursor: pointer;

  &:hover {
    text-decoration: underline;
  }

  .icon {
    background: none;
    color: #6f6f70;
    height: 20px;
    width: 20px;

    svg {
      fill: currentColor;
    }
  }
`

const SearchQuery = styled.div`
  -webkit-box-orient: vertical;
  color: var(--text-heading);
  display: -webkit-box;
  flex: 1;
  font-size: 16px;
  -webkit-line-clamp: 2;
  max-width: 227px;
  overflow-wrap: break-word;
  overflow: hidden;
  margin-left: 26px;
`
