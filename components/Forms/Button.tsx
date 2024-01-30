import styled from 'styled-components'

import Loader from 'components/Loader'

export type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  showLoader?: boolean
}

const Button = ({ children, showLoader = false, ...rest }: ButtonProps) => {
  return (
    <StyledButton {...rest}>
      {showLoader && <Loader size={20} color="#fff" />}
      {children}
    </StyledButton>
  )
}

export default Button

export const StyledButton = styled.button`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  font-size: 16px;
  font-family: var(--font-heading);
  font-weight: 400;
  line-height: 20px;
  border-radius: 4px;
  min-height: 48px;
  padding: 13px 24px 12px;
  transition: background-color 0.2s, box-shadow 0.2s, color 0.2s;
  border-width: 1px;
  border-style: solid;
  border-color: transparent;
  cursor: pointer;
  color: #fff;
  background-color: var(--blue-2);
  outline: 0;
  gap: 12px;

  &:hover {
    border-color: var(--blue-2);
    box-shadow: 0 1px 2px 0 rgba(60, 64, 67, 0.3),
      0 1px 3px 1px rgba(60, 64, 67, 0.15);
  }

  &:disabled {
    opacity: 0.6;
    cursor: not-allowed;
  }
`
