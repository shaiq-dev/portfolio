import { AppContants, AppStrings } from 'constants/index'
import { useForm } from 'hooks/useForm'
import Button from 'components/Forms/Button'
import Input from 'components/Forms/Input'
import { ConnectFormFieldGroup } from './_styled'

const ConnectForm = () => {
  const isNotEmpty = (v: string, msg = AppStrings.EMPTY_FIELD_ERROR) =>
    v.trim() !== '' ? null : msg

  const form = useForm({
    initialValues: {
      name: '',
      email: '',
      phone: '',
      subject: '',
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
    },
  })

  return (
    <form
      style={{ width: 517 }}
      onSubmit={form.onSubmit((values) => console.log(values))}
    >
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
      <Input label="Drop your message" />

      <Button>Say hello</Button>

      <div style={{ width: '100%', height: '600px' }} />
    </form>
  )
}

export default ConnectForm
