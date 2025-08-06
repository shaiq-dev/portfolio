import { sb } from '@/util'
import { useText } from '@/hooks'
import type { PeoplesQuestion } from '@/types'

import { Accordion, AccordionItem } from './ui/Accordion'
import Section from './Section'
import SearchResult from './SearchResult'
import { FollowUp } from './FollowUp'

export interface Props {
  questions: PeoplesQuestion[]
}

const getServerHtmlStyles = () => {
  return (
    <style>
      {`
        .q-link {
          font-size: 14px;
        }

        .q-image-pair {
          border-radius: 12px;
          overflow: hidden;
          height: 160px;
          width: 204px;
          cursor: pointer;
        }

        .q-image-pair img {
          transition: transform 200ms;
        }

        .q-image-pair:hover img {
          transform: scale(1.15);
        }
      `}
    </style>
  )
}

export const PeopleAlsoAsk = ({ questions }: Props) => {
  const { t } = useText()

  return (
    <>
      <Section heading={t('peopleAlsoAsk.heading')} gap={false} withBorder>
        {getServerHtmlStyles()}
        <Accordion>
          {questions.map((question, idx) => (
            <AccordionItem key={idx} value={question.ask}>
              <div
                className="highlight-b m-[10px_0px_0px_0px] p-[0px_24px_10px_0px] font-heading text-base leading-6 text-ash-300"
                dangerouslySetInnerHTML={{
                  __html: sb(question.answer),
                }}
              />
              {question.hasSearchResult && (
                <>
                  <SearchResult {...question.searchResult} />
                  {question.searchResultGoogleUrl && (
                    <div className="pt-5 text-base">
                      {t('peopleAlsoAsk.googleSearchLinkTitle')}
                      <a
                        className="_link"
                        target="_blank"
                        rel="noreferrer"
                        href={`https://www.google.com/search?q=${question.searchResultGoogleUrl}`}
                      >
                        {question.ask}
                      </a>
                    </div>
                  )}
                </>
              )}
            </AccordionItem>
          ))}
        </Accordion>
      </Section>
      <FollowUp />
    </>
  )
}
