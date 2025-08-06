import type { IWorkExperience } from '@/types'

export interface Props {
  data: IWorkExperience[]
}

export const WorkExperience = ({ data }: Props) => {
  const getDate = (date: string) => {
    return new Date(date).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'short',
    })
  }

  return (
    <div className="leading-norm text-ash-300 m-[6px_0px_44px] text-sm">
      <div className="text-heading block py-0.5 leading-[1.3]">Work Experience</div>
      {data.map((exp, idx) => (
        <div key={idx}>
          <div className="google-search-link">{exp.company}</div>
          <div>{exp.description}</div>
          <div className="ml-[15px]">
            {exp.positions.map(pos => (
              <div className="px-1.5 py-2 pl-0 first:pt-4" key={pos.id}>
                <div className="text-heading block py-0.5 leading-[1.3]">
                  {getDate(pos.startDate)} › {pos.endDate ? getDate(pos.endDate) : 'Present'}{' '}
                </div>
                <h4 className="google-search-link">{pos.role}</h4>
                <p>{pos.description}</p>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  )
}
