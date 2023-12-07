import s from '@/components/ui/ImputTest/inputTest.module.scss'
import { forwardRef } from 'react'

interface IInput {
  type: string
  label: string
  className?: string
}

export const InputTest = forwardRef<HTMLInputElement, IInput>((IInput, ref) => {
  const { type, label, className } = IInput
  return (
    <div className={s.inputWrapper}>
      <label htmlFor={'input'}>{label}</label>
      <input ref={ref} type={type} id={'input'} className={`${s.commonStyleInput}` ?? className} />
    </div>
  )
})
