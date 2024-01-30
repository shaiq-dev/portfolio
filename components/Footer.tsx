import styled, { css } from 'styled-components'

import { AppStrings } from 'constants/index'

const Footer = () => {
  return (
    <FooterWrapper>
      <FooterContainer>
        <FooterSection>
          <SectionContent>
            <span>{AppStrings.FOOTER_COUNTRY}</span>
            <Copyright>
              <span>
                © {new Date().getFullYear()} -{' '}
                {AppStrings.FOOTER_COPYRIGHT_NAME}
              </span>
            </Copyright>
          </SectionContent>
        </FooterSection>
        <FooterSection $noBorder>
          <SectionContent>{AppStrings.FOOTER_COPYRIGHT_CONTENT}</SectionContent>
        </FooterSection>
      </FooterContainer>
    </FooterWrapper>
  )
}

export default Footer

const FooterWrapper = styled.div`
  height: 106px;
  padding-top: 12px;
  box-sizing: content-box;
`

const FooterContainer = styled.div`
  padding: 12px 0px;
  background: var(--bg-secondary);
  line-height: 40px;
`

const FooterSection = styled.div<{ $noBorder?: boolean }>`
  border-bottom: 1px solid var(--gray-1);
  margin-left: -27px;

  ${(props) =>
    props.$noBorder &&
    css`
      border-bottom: none;
    `}
`

const SectionContent = styled.div`
  margin-left: var(--center-abs-margin);
  color: var(--gray-2);
  padding-left: 27px;
`

const Copyright = styled.div`
  display: inline-block;
  margin-left: 13px;
  padding-left: 16px;
  border-left: 1px solid var(--gray-1);
  font-weight: 600;
  color: var(--gray-3);
`
