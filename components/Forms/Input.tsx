import styled from 'styled-components'
import classNames from 'classnames'

export type GenericInputProps = {
  label: string
  required?: boolean
  error?: string
  focused?: boolean
}

export type InputProps = React.InputHTMLAttributes<HTMLInputElement> &
  GenericInputProps

export const Input = ({
  label,
  required = true,
  focused = false,
  error,
  ...props
}: InputProps) => {
  return (
    <InputWrapper>
      <InputLabel className={classNames({ focused, error: Boolean(error) })}>
        {label}
        {required && ' *'}
      </InputLabel>
      <InputField
        className={classNames({ error: Boolean(error) })}
        {...props}
      />
      {error && <InputError>{error}</InputError>}
    </InputWrapper>
  )
}

export const InputWrapper = styled.div`
  --c-error: rgb(217, 48, 37);
  --c-text: rgb(95, 99, 104);

  display: flex;
  flex-direction: column;
  position: relative;
  vertical-align: top;
  margin-bottom: 24px;
`

export const InputLabel = styled.div`
  color: var(--c-text);
  background-color: #fff;
  padding: 0px 5px;
  font-weight: 400;
  font-size: 12px;
  letter-spacing: 0.2px;
  display: block;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  max-width: calc(100% - 32px);
  position: absolute;
  left: 16px;
  top: -10px;
  z-index: 1;
  pointer-events: auto;
  user-select: none;

  &.focused {
    color: var(--blue-2);
  }

  &.error {
    color: var(--c-error);
  }
`

export const InputField = styled.input`
  -webkit-font-smoothing: antialiased;
  text-rendering: optimizelegibility;
  font-family: var(--font-heading);
  font-size: 16px;
  font-weight: 400;
  letter-spacing: 0.1px;
  line-height: 24px;
  appearance: none;
  color: var(--c-text);
  outline: 0;
  height: 56px;
  -webkit-tap-highlight-color: transparent;
  display: block;
  padding: 16px 14px;
  border-style: solid;
  border-width: 1px;
  border-color: #80868b;
  border-radius: 4px;

  &:hover {
    border-color: rgb(32, 33, 36);
  }

  &:focus {
    border-width: 2px;
    border-color: var(--blue-2);

    &.error {
      border-color: var(--c-error);
    }
  }

  &.error {
    color: var(--c-error);
    border-color: var(--c-error);

    &:hover {
      border-color: var(--c-error);
    }
  }
`

export const InputError = styled.span`
  display: block;
  margin-top: 4px;
  color: var(--c-error);
  font-size: 12px;
  letter-spacing: 0.2px;
  line-height: 16px;
  padding-left: 21px;
`
