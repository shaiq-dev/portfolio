import { useState } from 'react'
import styled, { css } from 'styled-components'

import { Api, AppErrors, AppStrings } from 'constants/index'
import GradientHeading from 'components/GradientHeading'
import ConnectForm, {
  type ConnectFormSubmitResponse,
} from 'components/ConnectForm'
import { useForm } from 'hooks/useForm'
import { isEmail, isEmpty } from 'utils/validators'
import { PageCenterColumn, PageContainer } from 'styles/shared'
import { withLayout } from 'layout/index'

function Connect() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [response, setResponse] = useState<ConnectFormSubmitResponse | null>(
    null
  )

  const form = useForm({
    initialValues: {
      name: '',
      email: '',
      phone: '',
      subject: '',
      message: '',
    },
    validators: {
      name: (value) => (isEmpty(value) ? 'Name is required' : null),
      email: (value) => (isEmail(value) ? null : AppErrors.INVALID_EMAIL_ERROR),
      phone: undefined,
      subject: (value) => (isEmpty(value) ? 'Subject is required' : null),
      message: (value) => (isEmpty(value) ? 'Message is required' : null),
    },
  })

  const handleSubmit = async (values: typeof form['values']) => {
    if (isSubmitting) {
      return
    }

    setIsSubmitting(true)

    try {
      const resp = await (
        await fetch(Api.CONNECT, {
          method: 'POST',
          body: JSON.stringify(values),
        })
      ).json()

      if (!resp.sent) {
        if (typeof resp.error === 'string') {
          setResponse({
            isError: true,
            message: `Failed to send request - ${resp.requestId}`,
          })
        }

        if (resp.error.field) {
          Object.entries(resp.error.field).forEach(([k, v]) => {
            form.setFieldError(k as keyof typeof form['values'], v as string)
          })
        }
      } else {
        setResponse({
          isError: false,
          message: AppStrings.CONNECT_PAGE_SUCCESS_MESSAGE,
        })
      }
    } catch (err) {
      setResponse({
        isError: true,
        message: AppErrors.SERVER_ERROR,
      })
    }

    setIsSubmitting(false)
  }

  return (
    <PageContainer>
      <PageCenterColumn>
        <GradientHeading
          gradient={{ from: 'var(--green-1)', to: 'var(--blue-2)' }}
          extraCss={css`
            margin: 36px 0px 24px;
          `}
        >
          {AppStrings.CONNECT_PAGE_HEADING}
        </GradientHeading>
        <SubHeading>{AppStrings.CONNECT_PAGE_SUB_HEADING}</SubHeading>
        <ConnectForm
          form={form}
          onSubmit={handleSubmit}
          isSubmitting={isSubmitting}
          submitResponse={response}
        />
      </PageCenterColumn>
    </PageContainer>
  )
}

export default withLayout(Connect)

const SubHeading = styled.p`
  font-size: 18px;
  font-family: var(--font-heading);
  font-weight: 300;
  color: var(--gray-2);
  margin: 24px 0px 36px;
`
