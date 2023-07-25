import { useState } from 'react'
import { InputContainer, InputField, InputLabel, InputError } from './_styled'
import classNames from 'classnames'

export type InputProps = React.InputHTMLAttributes<HTMLInputElement> & {
  label: string
  required?: boolean
  error?: string
}

const Input = ({ label, required = true, error, ...props }: InputProps) => {
  const [isFocused, setIsFocused] = useState(false)

  const focusClass = classNames({
    'input-focus': isFocused,
  })

  return (
    <InputContainer>
      <InputLabel $hasError={Boolean(error)}>
        {label}
        {required && ' *'}
      </InputLabel>
      <InputField $hasError={Boolean(error)} {...props} />
      {error && <InputError>{error}</InputError>}
    </InputContainer>
  )
}

export default Input
