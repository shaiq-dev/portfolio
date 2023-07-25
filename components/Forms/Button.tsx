import { ButtonContainer } from './_styled'

export type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement>

const Button = ({ children }: ButtonProps) => {
  return <ButtonContainer>{children}</ButtonContainer>
}

export default Button
