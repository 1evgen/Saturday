import s from '@/components/ui/ImputTest/inputTest.module.scss'
import { ChangeEvent, useState } from 'react'

interface IInput {
  type: string
  label: string
  className?: string
}

export const InputTest = (props: IInput) => {
  const { type, label, className } = props
  const [value, setValue] = useState('')

  const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value)
  }

  return (
    <div className={s.inputWrapper}>
      <label htmlFor={'input'}>{label}</label>
      <input
        value={value}
        onChange={onChangeHandler}
        type={type}
        id={'input'}
        className={`${s.commonStyleInput}` ?? className}
      />
    </div>
  )
}
