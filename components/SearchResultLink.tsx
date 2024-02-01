import styled from 'styled-components'

import { AsGoogleLink } from 'styles/shared'

export type SearchResultLinkProps = {
  website: string
  icon: string
  cite: string
  href: string
  linkTitle: string
}

const SearchResultLink = ({
  website,
  icon,
  cite,
  href,
  linkTitle,
}: SearchResultLinkProps) => {
  return (
    <a href={href} target="_blank" rel="noreferrer">
      <div className="d-in-block">
        <div className="d-flex items-center">
          <ResultLinkIcon>
            <img src={icon} />
          </ResultLinkIcon>
          <div>
            <WebsiteName>{website}</WebsiteName>
            <Cite>{cite}</Cite>
          </div>
        </div>
      </div>
      <AsGoogleLink>{linkTitle}</AsGoogleLink>
    </a>
  )
}

export default SearchResultLink

const ResultLinkIcon = styled.div`
  background-color: #f1f3f4;
  border: 1px solid #ecedef;
  border-radius: 50%;
  display: inline-flex;
  justify-content: center;
  align-items: center;
  height: 26px;
  width: 26px;
  margin-right: 12px;
  vertical-align: middle;

  img {
    width: 20px;
    height: 20px;
  }
`

const WebsiteName = styled.span`
  color: var(--text-heading);
  font-size: 14px;
  display: block;
  line-height: 20px;
  white-space: nowrap;
`

const Cite = styled.div`
  font-size: 12px;
  line-height: 18px;
  color: var(--gary-3);
`
