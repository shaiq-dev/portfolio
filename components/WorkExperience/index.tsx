import type { WorkExperience as Experience } from 'types/index'

import { WorkExpContainer } from './work.styled'

const WorkExperience = ({ data }: { data: Experience }) => {
  const getDate = (date: string) => {
    return new Date(date).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'short',
    })
  }

  return (
    <WorkExpContainer className="experience">
      <span className="experience__sub">Work Experience</span>
      {data.map((work) => {
        return (
          <div key={work.id}>
            <h3 className="experience__heading">{work.company}</h3>
            <div>{work.description}</div>
            <div className="experience__list">
              {work.positions.map((position) => {
                return (
                  <div key={position.id} className="experience__list--position">
                    <span className="experience__sub">
                      {getDate(position.startDate)} ›{' '}
                      {position.endDate ? getDate(position.endDate) : 'Present'}{' '}
                    </span>
                    <h3 className="experience__heading">{position.role}</h3>
                    <div>{position.description}</div>
                  </div>
                )
              })}
            </div>
          </div>
        )
      })}
    </WorkExpContainer>
  )
}

export default WorkExperience
