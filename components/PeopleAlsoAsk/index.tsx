import styled from 'styled-components'

import SectionHeading from 'components/SectionHeading'
import Accordion from 'components/Accordion'
import SearchResultLink, {
  type SearchResultLinkProps,
} from 'components/SearchResultLink'

export type PeopleAlsoAskQuestion = {
  question: string
  description: string
  hasSearchResult: boolean
  searchResultLink: SearchResultLinkProps | undefined
  searchResultGoogleUrl: string | undefined
}

export type PeopleAlsoAskProps = {
  questions: PeopleAlsoAskQuestion[]
}

const PeopleAlsoAsk = ({ questions }: PeopleAlsoAskProps) => {
  return (
    <div className="with-section-gap">
      <SectionHeading heading="People also ask" />
      <div>
        {questions.map((item, idx) => (
          <Accordion key={idx} label={item.question}>
            <QuestionDescription>{item.description}</QuestionDescription>

            {item.hasSearchResult && item.searchResultLink && (
              <>
                <SearchResultLink {...item.searchResultLink} />
                {item.searchResultGoogleUrl && (
                  <GoogleSearchResultUrl>
                    Search for:{' '}
                    <a
                      className="link"
                      target="_blank"
                      rel="noreferrer"
                      href={`https://www.google.com/search?q=${item.searchResultGoogleUrl}`}
                    >
                      {item.question}
                    </a>
                  </GoogleSearchResultUrl>
                )}
              </>
            )}
          </Accordion>
        ))}
      </div>
    </div>
  )
}

export default PeopleAlsoAsk

const QuestionDescription = styled.div`
  padding: 0 24px 10px 0px;
  margin: 10px 0 0 0;
  color: var(--gray-3);
  font-family: var(--font-heading);
  font-size: 16px;
  line-height: 24px;
`

const GoogleSearchResultUrl = styled.div`
  padding-top: 20px;
  font-size: 16px;
`
