import styled from 'styled-components'
import classNames from 'classnames'

import {
  type GenericInputProps,
  InputError,
  InputField,
  InputLabel,
  InputWrapper,
} from './Input'

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
    <InputWrapper>
      <InputLabel className={classNames({ focused, error: Boolean(error) })}>
        {label}
        {required && ' *'}
      </InputLabel>
      <TextAreaField
        className={classNames({ error: Boolean(error) })}
        {...props}
        as="textarea"
      />
      {error && <InputError>{error}</InputError>}
    </InputWrapper>
  )
}

const TextAreaField = styled(InputField)`
  height: unset;
  min-height: 56px;
  resize: none;
`
