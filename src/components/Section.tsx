import { cn } from '@/util'

export interface Props {
  heading: string
  subHeading?: string
  gap?: boolean
  withBorder?: boolean
  children: React.ReactNode
}

const Section = ({ heading, subHeading, gap = true, withBorder = false, children }: Props) => {
  return (
    <div className={cn({ 'mb-11': gap })}>
      <div className="m-[0px_-16px] flex p-[0px_16px_8px]">
        <h2 className="block text-[22px] leading-7">
          {heading}
          {subHeading != null && (
            <div className="text-ash-200 mt-1 text-sm leading-5">{subHeading}</div>
          )}
        </h2>
      </div>
      {withBorder && <div className="border-ash-100 border-b border-solid" />}
      {children}
    </div>
  )
}

export default Section
