import styled, { css } from 'styled-components'
import { HiOutlineExclamationCircle } from 'react-icons/hi2'

import { AppStrings } from 'constants/index'
import { UseFormReturnType } from 'hooks/useForm'
import Input, { TextArea } from './forms/Input'
import Button from './forms/Button'

export type ConnectFormSubmitResponse = {
  isError: boolean
  message: string
}

export type ConnectFormProps<T> = {
  form: UseFormReturnType<T>
  onSubmit: (values: T) => void
  isSubmitting: boolean
  submitResponse: ConnectFormSubmitResponse | null
}

const ConnectForm = <T extends Record<string, string>>({
  form,
  onSubmit,
  isSubmitting,
  submitResponse,
}: ConnectFormProps<T>) => {
  return (
    <FormWrapper onSubmit={form.onSubmit(onSubmit)}>
      <FieldGroup>
        <div className="flex-1">
          <Input label="Name" {...form.getInputProps('name')} />
        </div>
        <div className="flex-1">
          <Input label="Email" {...form.getInputProps('email')} />
        </div>
      </FieldGroup>

      <Input label="Phone" required={false} {...form.getInputProps('phone')} />
      <Input label="Subject" {...form.getInputProps('subject')} />

      <TextArea
        label="Drop your message"
        placeholder={AppStrings.CONNECT_PAGE_TEXTAREA_PLACEHOLDER}
        rows={3}
        cols={20}
        maxLength={1000}
        {...form.getInputProps('message')}
      />

      <FieldGroup>
        <Button showLoader={isSubmitting} disabled={isSubmitting}>
          {AppStrings.CONNECT_PAGE_SUBMIT_BUTTON_TEXT}
        </Button>
        {submitResponse && (
          <Response $isError={submitResponse.isError}>
            <HiOutlineExclamationCircle size={16} />
            <span>{submitResponse.message}</span>
          </Response>
        )}
      </FieldGroup>
    </FormWrapper>
  )
}

export default ConnectForm

const FormWrapper = styled.form`
  width: 517px;
  padding-bottom: 36px;
`

const FieldGroup = styled.div`
  display: flex;
  column-gap: 24px;
  flex-wrap: wrap;
  align-items: center;
`

const Response = styled.div<{ $isError?: boolean }>`
  display: flex;
  align-items: center;
  column-gap: 4px;
  color: var(--green-1);

  ${(props) =>
    props.$isError &&
    css`
      color: var(--red-1);
    `}
`
