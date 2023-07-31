import { useState } from 'react'

/**
 * Validation function for each input, that should return a `string`
 * to indicate error or else `null`. If a field is optional set to
 * `undefined`.
 */
type FormValidators<T> = {
  [K in keyof T]: ((value: T[K]) => string | null) | undefined
}

type FormErrors<T> = { [K in keyof T]?: string }

type FormInputFocus<T> = { [K in keyof T]?: boolean }

type FormHandlers = {
  handleChange: (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => void
  handleBlur: (
    e: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => void
  handleFocus: (
    e: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => void
}

type FormGetInputProps<T> = <K extends keyof T>(
  name: K
) => {
  name: K
  value: T[K]
  onChange: FormHandlers['handleChange']
  onBlur: FormHandlers['handleBlur']
  onFocus: FormHandlers['handleFocus']
  focused: boolean
  error: string | undefined
}

type UseFormReturnType<T> = {
  /**
   * Value object, storing all form values
   */
  values: T
  /**
   * Returns the props for an input field (event handlers, name
   * and value). Also returns an error props which indicates if
   * the field has an error.
   */
  getInputProps: FormGetInputProps<T>
  /**
   * Form submit handler. Calls the callback only if the errors object
   * is empty.
   */
  onSubmit: (callback: (values: T) => void) => (e: React.FormEvent) => void
  /**
   * Set's a custom error on a field
   */
  setFieldError: <K extends keyof T>(name: K, error: string) => void
}

/**
 * Hook for handling form input and validation
 */
export const useForm = <T extends Record<string, unknown>>({
  initialValues,
  validators,
}: {
  initialValues: T
  validators: FormValidators<T>
}): UseFormReturnType<T> => {
  const [values, setValues] = useState<T>(initialValues)
  const [errors, setErrors] = useState<FormErrors<T>>({})
  const [isFocused, setIsFocused] = useState<FormInputFocus<T>>({})

  const handleChange: FormHandlers['handleChange'] = (e) => {
    const { name, value } = e.target

    if (validators[name]) {
      const error = validators[name]?.(value as T[string])
      setErrors((prev) => ({ ...prev, [name]: error }))
    }

    setValues((prev) => ({ ...prev, [name]: value }))
  }

  const handleBlur: FormHandlers['handleBlur'] = (e) => {
    const { name, value } = e.target

    setIsFocused((prev) => ({ ...prev, [name]: false }))

    if (validators[name]) {
      const error = validators[name]?.(value as T[string])
      setErrors((prev) => ({ ...prev, [name]: error }))
    }
  }

  const handleFocus: FormHandlers['handleFocus'] = (e) => {
    const { name } = e.target
    setIsFocused((prev) => ({ ...prev, [name]: true }))
  }

  const setFieldError = <K extends keyof T>(name: K, error: string) => {
    setErrors((prev) => ({ ...prev, [name]: error }))
  }

  const onSubmit = (callback: (values: T) => void) => (e: React.FormEvent) => {
    e.preventDefault()

    // Validate All Inputs
    const _errors: Record<string, any> = {}
    Object.entries(values).forEach(([k, v]) => {
      if (validators[k]) {
        const error = validators[k]?.(v as T[string])
        if (error) {
          _errors[k] = error
        }
      }
    })
    setErrors((prev) => ({ ...prev, ..._errors }))

    if (Object.keys(_errors).length === 0) {
      callback(values)
    }
  }

  const getInputProps: FormGetInputProps<T> = (name) => ({
    name,
    value: values[name],
    onChange: handleChange,
    onBlur: handleBlur,
    onFocus: handleFocus,
    focused: isFocused[name] || false,
    error: errors[name] || undefined,
  })

  return { getInputProps, onSubmit, values, setFieldError }
}
