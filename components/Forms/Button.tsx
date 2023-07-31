import { Loader } from 'components/Common'
import { ButtonContainer } from './_styled'

export type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  showLoader?: boolean
}

const Button = ({ children, showLoader = false, ...rest }: ButtonProps) => {
  return (
    <ButtonContainer {...rest}>
      {showLoader && <Loader size={20} color="#fff" />}
      {children}
    </ButtonContainer>
  )
}

export default Button
