import type { WorkExperience as Experience } from 'types/index'

import {
  WorkExpCompanyPosition,
  WorkExpCompanyPositionList,
  WorkExpContainer,
  WorkExpSubTitle,
  WorkExpTitle,
} from './_styled'

const WorkExperience = ({ data }: { data: Experience }) => {
  const getDate = (date: string) => {
    return new Date(date).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'short',
    })
  }

  return (
    <WorkExpContainer className="experience">
      <WorkExpSubTitle>Work Experience</WorkExpSubTitle>
      {data.map((work) => {
        return (
          <div key={work.id}>
            <WorkExpTitle>{work.company}</WorkExpTitle>
            <div>{work.description}</div>
            <WorkExpCompanyPositionList>
              {work.positions.map((position) => {
                return (
                  <WorkExpCompanyPosition key={position.id}>
                    <WorkExpSubTitle>
                      {getDate(position.startDate)} ›{' '}
                      {position.endDate ? getDate(position.endDate) : 'Present'}{' '}
                    </WorkExpSubTitle>
                    <WorkExpTitle as="h3">{position.role}</WorkExpTitle>
                    <div>{position.description}</div>
                  </WorkExpCompanyPosition>
                )
              })}
            </WorkExpCompanyPositionList>
          </div>
        )
      })}
    </WorkExpContainer>
  )
}

export default WorkExperience
