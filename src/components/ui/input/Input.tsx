// import React from 'react'
import s from './input.module.scss'
import { IconComponent } from '@/components/Icon/IconComponent'
import { useState } from 'react'

interface IInput {
  labelName: string
  placeholder: string
  variant: 'textInput' | 'searchInput' | 'showInput'
  isDisabled: false
}

export const Input: React.FC<IInput> = ({ labelName, placeholder, variant, isDisabled }) => {
  const [isError, setError] = useState(false)

  return (
    <div className={s.wrapperInput}>
      <label className={s.label} htmlFor={labelName}>
        {labelName}
      </label>
      <div className={s[variant]}>
        {variant === 'showInput' && (
          <div className={`${s.iconEye} ${isDisabled ? s.iconDisabled : ''}`}>
            {<IconComponent name={'eyeIcon'} />}
          </div>
        )}
        {variant === 'searchInput' && (
          <div className={s.testStyle}>
            <IconComponent className={`${s.first}`} name={'searchIcon'} />
            {/*<IconComponent className={s.second} name={'closeIcon'} />*/}
          </div>
        )}
        <input
          disabled={isDisabled}
          placeholder={placeholder}
          className={`${s.inputField} ${isError ? s.errorField : ''} ${
            isDisabled ? s.styledDisabled : ''
          } `}
          id={'input'}
        ></input>
        {isError && <div className={s.errorMessage}>Error</div>}
      </div>
    </div>
  )
}
