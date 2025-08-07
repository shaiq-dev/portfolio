export interface Props {
  center: React.ReactNode
  right?: React.ReactNode
}

export const Page = ({ center, right }: Props) => {
  return (
    <div className="max-w-[calc(theme(--spacing-center-abs-margin)+theme(--spacing-center-width)+theme(--spacing-r-margin)+theme(--spacing-r-width))] flex flex-wrap justify-start">
      <div className="ml-center-abs-margin w-center-width relative flex-[0_1_auto]">{center}</div>
      <div className="ml-r-margin w-r-width relative flex-[0_1_auto] pb-[15px]">{right}</div>
    </div>
  )
}
