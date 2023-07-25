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

type FormHandlers = {
  handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void
  handleBlur: (e: React.FocusEvent<HTMLInputElement>) => void
}

type FormGetInputProps<T> = <K extends keyof T>(
  name: K
) => {
  name: K
  value: T[K]
  onChange: FormHandlers['handleChange']
  onBlur: FormHandlers['handleBlur']
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

    if (validators[name]) {
      const error = validators[name]?.(value as T[string])
      setErrors((prev) => ({ ...prev, [name]: error }))
    }
  }

  const onSubmit = (callback: (values: T) => void) => (e: React.FormEvent) => {
    e.preventDefault()

    // Validate All Inputs
    Object.entries(values).forEach(([k, v]) => {
      if (validators[k]) {
        const error = validators[k]?.(v as T[string])
        setErrors((prev) => ({ ...prev, [k]: error }))
      }
    })

    if (Object.keys(errors).length === 0) {
      callback(values)
    }
  }

  const getInputProps: FormGetInputProps<T> = (name) => ({
    name,
    value: values[name],
    onChange: handleChange,
    onBlur: handleBlur,
    error: errors[name] || undefined,
  })

  return { getInputProps, onSubmit, values }
}
