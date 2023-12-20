import s from '@/components/ui/ImputTest/inputTest.module.scss'
import { useRef } from 'react'

interface IInput {
  type: string
  label: string
  className?: string
  setValue: (value: string) => void
}

export const InputTest = (props: IInput) => {
  const inputRef = useRef<HTMLInputElement>(null)
  const { type, label, className, setValue } = props
  let value = ''
  function clickEnter(e: React.KeyboardEvent<HTMLInputElement>) {
    if (e.key === 'Enter') {
      if (inputRef.current) {
        value = inputRef.current.value
        setValue(value)
        console.log('Entered value:', value)
      }
    }
  }

  return (
    <div className={s.inputWrapper}>
      <label htmlFor={'input'}>{label}</label>
      <input
        onKeyPress={clickEnter}
        ref={inputRef}
        type={type}
        id={'input'}
        className={`${s.commonStyleInput} ${className ?? ''}`}
      />
    </div>
  )
}
