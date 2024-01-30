import styled from 'styled-components'

import { RenderIf } from 'components/util'

export type SectionHeadingProps = {
  heading: string
  subHeading?: string
  withBorder?: boolean
}

const SectionHeading = ({
  heading,
  subHeading,
  withBorder = true,
}: SectionHeadingProps) => {
  return (
    <>
      <SectionHeadingWrapper>
        <StyledHeading>
          {heading}
          <RenderIf isTrue={subHeading != null}>
            <div>{subHeading}</div>
          </RenderIf>
        </StyledHeading>
      </SectionHeadingWrapper>
      <RenderIf isTrue={withBorder}>
        <Border />
      </RenderIf>
    </>
  )
}

export default SectionHeading

const SectionHeadingWrapper = styled.div`
  display: flex;
  padding: 0 16px 8px;
  margin: 0 -16px;
`

const StyledHeading = styled.h2`
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

const Border = styled.div`
  border-bottom: 1px solid var(--gray-1);
`
