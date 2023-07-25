import { InputContainer, InputField, InputLabel, InputError } from './_styled'

export type InputProps = React.InputHTMLAttributes<HTMLInputElement> & {
  label: string
  required?: boolean
  error?: string
  focused?: boolean
}

const Input = ({
  label,
  required = true,
  focused = false,
  error,
  ...props
}: InputProps) => {
  return (
    <InputContainer>
      <InputLabel $hasError={Boolean(error)} $hasFocus={focused}>
        {label}
        {required && ' *'}
      </InputLabel>
      <InputField $hasError={Boolean(error)} {...props} />
      {error && <InputError>{error}</InputError>}
    </InputContainer>
  )
}

export default Input
