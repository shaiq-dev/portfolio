import { FooterContainer } from './footer.styled'

const Footer = () => {
  return (
    <FooterContainer className="footer">
      <div className="footer__wrapper">
        <div className="footer__bar">
          <div className="footer__bar--content">
            <span>India</span>
            <div className="footer__bar--copyright">
              <span>© {new Date().getFullYear()} - Shaiq Kar</span>
            </div>
          </div>
        </div>
      </div>
    </FooterContainer>
  )
}

export default Footer
