import styled, { css } from 'styled-components'

export const FooterContainer = styled.div`
  height: 106px;
  padding-top: 12px;
  box-sizing: content-box;
`

export const FooterWrapper = styled.div`
  padding: 12px 0px;
  background: var(--bg-secondary);
  line-height: 40px;
`

export const FooterSection = styled.div<{ $noBorder?: boolean }>`
  border-bottom: 1px solid var(--gray-1);
  margin-left: -27px;

  ${(props) =>
    props.$noBorder &&
    css`
      border-bottom: none;
    `}
`

export const FooterSectionContent = styled.div`
  margin-left: var(--center-abs-margin);
  color: var(--gray-2);
  padding-left: 27px;
`

export const FooterCopyright = styled.div`
  display: inline-block;
  margin-left: 13px;
  padding-left: 16px;
  border-left: 1px solid var(--gray-1);
  font-weight: 600;
  color: var(--gray-3);
`
