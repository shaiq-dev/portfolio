import {
  FooterContainer,
  FooterCopyright,
  FooterSection,
  FooterSectionContent,
  FooterWrapper,
} from './_styled'

const Footer = () => {
  return (
    <FooterContainer>
      <FooterWrapper>
        <FooterSection>
          <FooterSectionContent>
            <span>India</span>
            <FooterCopyright>
              <span>© {new Date().getFullYear()} - Shaiq Kar</span>
            </FooterCopyright>
          </FooterSectionContent>
        </FooterSection>
        <FooterSection $noBorder>
          <FooterSectionContent>
            Google and the Google logo are registered trademarks of Google LLC.
          </FooterSectionContent>
        </FooterSection>
      </FooterWrapper>
    </FooterContainer>
  )
}

export default Footer
