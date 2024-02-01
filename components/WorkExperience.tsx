import styled from 'styled-components'

import type { WorkExperience as Experience } from 'types/index'

const WorkExperience = ({ data }: { data: Experience[] }) => {
  const getDate = (date: string) => {
    return new Date(date).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'short',
    })
  }

  return (
    <ExperienceWrapper className="experience">
      <ExperienceHeader>Work Experience</ExperienceHeader>
      {data.map((work) => {
        return (
          <div key={work.id}>
            <CompanyName>{work.company}</CompanyName>
            <div>{work.description}</div>
            <CompanyPositionsList>
              {work.positions.map((position) => {
                return (
                  <CompanyPosition key={position.id}>
                    <PositionDuration>
                      {getDate(position.startDate)} ›{' '}
                      {position.endDate ? getDate(position.endDate) : 'Present'}{' '}
                    </PositionDuration>
                    <PositionName as="h3">{position.role}</PositionName>
                    <div>{position.description}</div>
                  </CompanyPosition>
                )
              })}
            </CompanyPositionsList>
          </div>
        )
      })}
    </ExperienceWrapper>
  )
}

export default WorkExperience

const ExperienceWrapper = styled.div`
  margin: 6px 0px 44px;
  font-size: 14px;
  color: var(--gray-3);
  line-height: var(--lh-norm);
`

const ExperienceHeader = styled.div`
  font-size: 14px;
  line-height: 1.3;
  padding: 2px 0;
  color: var(--text-heading);
  display: block;
`

const CompanyName = styled.div`
  display: inline-block;
  line-height: 1.3;
  margin-bottom: 3px;
  font-size: 20px;
  font-weight: 400;
  color: var(--blue-1);
  padding-top: 5px;
`

const CompanyPositionsList = styled.div`
  margin-left: 15px;
`

const CompanyPosition = styled.div`
  padding: 8px 6px 8px 0px;

  &:nth-child(1) {
    padding-top: 16px;
  }
`
const PositionName = styled(CompanyName)``

const PositionDuration = styled(ExperienceHeader)``
