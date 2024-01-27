import styled from 'styled-components'

import { RenderIf } from 'components/Common'

const SectionHeaderWrapper = styled.div`
  display: flex;
  padding: 0 16px 8px;
  margin: 0 -16px;
`

const HeaderText = styled.h2`
  font-size: 22px;
  line-height: 28px;
  display: block;

  > div {
    margin-top: 4px;
    line-height: 20px;
    font-size: 14px;
    color: var(--gray-2);
  }
`

const HeaderBorder = styled.div`
  border-bottom: 1px solid var(--gray-1);
`

export type SectionHeaderProps = {
  heading: string
  subHeading?: string
  withBorder?: boolean
}

const SectionHeader = ({
  heading,
  subHeading,
  withBorder = true,
}: SectionHeaderProps) => {
  return (
    <>
      <SectionHeaderWrapper>
        <HeaderText>
          {heading}
          <RenderIf isTrue={subHeading != null}>
            <div>{subHeading}</div>
          </RenderIf>
        </HeaderText>
      </SectionHeaderWrapper>
      <RenderIf isTrue={withBorder}>
        <HeaderBorder />
      </RenderIf>
    </>
  )
}

export default SectionHeader
