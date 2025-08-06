export interface Props {
  center: React.ReactNode
  right?: React.ReactNode
}

export const Page = ({ center, right }: Props) => {
  return (
    <div className="flex max-w-[calc(var(--center-abs-margin)+var(--center-width)+var(--r-margin)+var(--r-width))] flex-wrap justify-start">
      <div className="relative ml-[--center-abs-margin] w-[--center-width] flex-[0_1_auto]">
        {center}
      </div>
      <div className="relative ml-[--r-margin] w-[--r-width] flex-[0_1_auto] pb-[15px]">
        {right}
      </div>
    </div>
  )
}
