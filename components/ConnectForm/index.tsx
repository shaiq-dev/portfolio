import { useState } from 'react'
import { HiOutlineExclamationCircle } from 'react-icons/hi2'

import { AppContants, AppStrings } from 'constants/index'
import { useForm } from 'hooks/useForm'
import Button from 'components/Forms/Button'
import Input, { TextArea } from 'components/Forms/Input'
import {
  ConnectFormApiMessage,
  ConnectFormContainer,
  ConnectFormFieldGroup,
} from './_styled'

const ConnectForm = () => {
  const [loading, setLoading] = useState(false)
  const [apiResponse, setApiResponse] = useState<{
    isError: boolean
    message: string
  } | null>(null)

  const isNotEmpty = (v: string, msg = AppStrings.EMPTY_FIELD_ERROR) =>
    v.trim() !== '' ? null : msg

  const form = useForm({
    initialValues: {
      name: '',
      email: '',
      phone: '',
      subject: '',
      message: '',
    },
    validators: {
      name: (value) => isNotEmpty(value),
      email: (value) =>
        value.trim() !== ''
          ? AppContants.EMAIL_REGEX.test(value.trim())
            ? null
            : AppStrings.INVALID_EMAIL_ERROR
          : AppStrings.EMPTY_FIELD_ERROR,
      phone: undefined,
      subject: (value) => isNotEmpty(value),
      message: (value) => isNotEmpty(value),
    },
  })

  const handleSubmit = async (values: typeof form['values']) => {
    console.log('I was called')

    // Incase submit button gets clicked multiple times
    if (loading) {
      return
    }

    setLoading(true)

    try {
      const resp = await (
        await fetch('/api/connect', {
          method: 'POST',
          body: JSON.stringify(values),
        })
      ).json()

      if (!resp.sent) {
        if (typeof resp.error === 'string') {
          setApiResponse({
            isError: true,
            message: `Failed to send request - ${resp.requestId}`,
          })
        }

        if (resp.error.fieldError) {
          Object.entries(resp.error.fieldError).forEach(([k, v]) => {
            form.setFieldError(k as keyof typeof form['values'], v as string)
          })
        }
      } else {
        setApiResponse({
          isError: false,
          message: AppStrings.CONNECT_PAGE_SUCCESS_MESSAGE,
        })
      }
    } catch (err) {
      setApiResponse({
        isError: true,
        message: AppStrings.SERVER_ERROR,
      })
    }

    setLoading(false)
  }

  return (
    <ConnectFormContainer onSubmit={form.onSubmit(handleSubmit)}>
      <ConnectFormFieldGroup>
        <div className="flex-1">
          <Input label="Name" {...form.getInputProps('name')} />
        </div>
        <div className="flex-1">
          <Input label="Email" {...form.getInputProps('email')} />
        </div>
      </ConnectFormFieldGroup>
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

      <ConnectFormFieldGroup>
        <Button showLoader={loading} disabled={loading}>
          Say hello
        </Button>

        {apiResponse && (
          <ConnectFormApiMessage $isError={apiResponse.isError}>
            <HiOutlineExclamationCircle size={16} />
            <span>{apiResponse.message}</span>
          </ConnectFormApiMessage>
        )}
      </ConnectFormFieldGroup>
    </ConnectFormContainer>
  )
}

export default ConnectForm
