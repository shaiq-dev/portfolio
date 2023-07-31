import {
  InputContainer,
  InputField,
  InputLabel,
  InputError,
  TextAreaField,
} from './_styled'

type GenericInputProps = {
  label: string
  required?: boolean
  error?: string
  focused?: boolean
}

export type InputProps = React.InputHTMLAttributes<HTMLInputElement> &
  GenericInputProps

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

export type TextAreaProps = React.TextareaHTMLAttributes<HTMLTextAreaElement> &
  GenericInputProps

export const TextArea = ({
  label,
  required = true,
  focused = false,
  error,
  ...props
}: TextAreaProps) => {
  return (
    <InputContainer>
      <InputLabel $hasError={Boolean(error)} $hasFocus={focused}>
        {label}
        {required && ' *'}
      </InputLabel>
      <TextAreaField $hasError={Boolean(error)} {...props} as="textarea" />
      {error && <InputError>{error}</InputError>}
    </InputContainer>
  )
}

export default Input
