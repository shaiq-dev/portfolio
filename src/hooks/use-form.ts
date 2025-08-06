'use client'

import { useState } from 'react'

type Message = string
type Field = HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement

export type ValidatorFunction<T> = (value: T) => Message | null

export type EventHandler<E> = (event: E) => void

export type InputProps<T> = <K extends keyof T>(
  name: K
) => {
  name: K
  value: T[K]
  onChange: EventHandler<React.ChangeEvent<Field>>
  onBlur: EventHandler<React.FocusEvent<Field>>
  onFocus: EventHandler<React.FocusEvent<Field>>
  focused: boolean
  error: Message | null
}

export type FormValidators<T> = {
  [K in keyof T]: ValidatorFunction<T[K]>
}

export interface FormOptions {
  /* Validate input on chnage */
  validateOnChnage?: boolean
}

export interface UseFormReturnType<T> {
  /* Value object, storing all form values */
  values: T

  /* Returns the props for an input field - event handlers, name, value and error */
  getInputProps: InputProps<T>

  /* Form submit handler. Calls the callback only if the form has no errors */
  onSubmit: (callback: (values: T) => void) => (e: React.FormEvent) => void

  /* Set's a custom error on a field */
  setFieldError: <K extends keyof T>(name: K, error: string) => void
}

export const useForm = <T extends Record<string, string>>({
  initialValues,
  validators,
  options: { validateOnChnage = false },
}: {
  initialValues: T
  validators: FormValidators<T>
  options: FormOptions
}): UseFormReturnType<T> => {
  const [values, setValues] = useState<T>(initialValues)
  const [errors, setErrors] = useState<{ [K in keyof T]?: Message }>({})
  const [focused, setFocused] = useState<{ [K in keyof T]?: boolean }>({})

  const handleChange: EventHandler<React.ChangeEvent<Field>> = e => {
    const { name, value } = e.target

    if (validateOnChnage && validators[name]) {
      const error = validators[name]?.(value as T[string])
      setErrors(prev => ({ ...prev, [name]: error }))
    }

    setValues(prev => ({ ...prev, [name]: value }))
  }

  const handleBlur: EventHandler<React.FocusEvent<Field>> = e => {
    const { name, value } = e.target

    setFocused(prev => ({ ...prev, [name]: false }))

    if (validators[name]) {
      const error = validators[name]?.(value as T[string])
      setErrors(prev => ({ ...prev, [name]: error }))
    }
  }

  const handleFocus: EventHandler<React.FocusEvent<Field>> = e => {
    const { name } = e.target
    setFocused(prev => ({ ...prev, [name]: true }))
  }

  const setFieldError = <K extends keyof T>(name: K, error: string) => {
    setErrors(prev => ({ ...prev, [name]: error }))
  }

  const getInputProps: InputProps<T> = name => ({
    name,
    value: values[name],
    onChange: handleChange,
    onBlur: handleBlur,
    onFocus: handleFocus,
    focused: focused[name] || false,
    error: errors[name] || null,
  })

  const onSubmit = (callback: (values: T) => void) => (e: React.FormEvent) => {
    e.preventDefault()

    // Validate All Inputs
    const _errors: Record<string, string> = {}
    Object.entries(values).forEach(([k, v]) => {
      if (validators[k]) {
        const error = validators[k]?.(v as T[string])
        if (error) {
          _errors[k] = error
        }
      }
    })
    setErrors(prev => ({ ...prev, ..._errors }))

    if (Object.keys(_errors).length === 0) {
      callback(values)
    }
  }

  return { getInputProps, onSubmit, values, setFieldError }
}
