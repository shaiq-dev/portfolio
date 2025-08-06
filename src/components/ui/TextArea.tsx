import { forwardRef } from 'react'

export interface _CommonInputProps {
  label: string
  required?: boolean
  error?: string | null
  focused?: boolean
}

export type InputProps = React.InputHTMLAttributes<HTMLInputElement> & _CommonInputProps

const Input = forwardRef<HTMLInputElement, InputProps>((_props, ref) => {
  const { label, required = true, focused = false, error, ...props } = _props
  return (
    <div className="relative mb-6 flex flex-col align-top">
      <label className="pointer-events-auto absolute -top-2.5 left-4 z-10 block truncate bg-white p-[0px_5px] text-[12px] font-normal tracking-[0.2px] whitespace-nowrap select-none">
        {label}
        {required && ' *'}
      </label>
      <input
        ref={ref}
        className="border-ash-100 font-heading block h-14 rounded border border-solid px-3.5 py-4 leading-6 font-normal outline-0"
        {...props}
      />
    </div>
  )
})
Input.displayName = 'Input'

export default Input
