// import React from 'react'
import s from './input.module.scss'
import { IconComponent } from '@/components/Icon/IconComponent'
import React, { ChangeEvent, useEffect, useRef, useState } from 'react'

interface IInput {
  labelName: string
  placeholder: string
  variant: 'textInput' | 'searchInput' | 'passwordField'
  isDisabled?: false
  type?: string
}

export const Input: React.FC<IInput> = ({ labelName, placeholder, variant, isDisabled, type }) => {
  const inputRef = useRef<HTMLInputElement>(null)
  const [inputType, setInputType] = useState<'text' | 'password' | null>(null)
  const [value, setValue] = useState('')
  // const [inputType, setInputType] = useState(type)

  useEffect(() => {
    if (inputRef.current) {
      setInputType(inputRef.current.type as 'text' | 'password')
    }
  }, [])

  const showPassword = () => {
    if (inputRef.current) {
      const newType = inputType === 'password' ? 'text' : 'password'
      setInputType(newType)
      inputRef.current.type = newType
    }
  }
  const clearText = () => {
    setValue('')
  }
  const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value)
  }

  return (
    <div className={s.wrapperInput}>
      <label className={s.label} htmlFor={labelName}>
        {labelName}
      </label>

      <div className={s[variant]}>
        {variant === 'passwordField' && value.length > 0 && (
          <div
            className={`${s.iconEye} ${isDisabled ? s.iconDisabled : ''}`}
            onClick={showPassword}
          >
            {inputRef.current?.type !== 'password' ? (
              <IconComponent name={'hideIcon'} />
            ) : (
              <IconComponent name={'eyeIcon'} />
            )}
          </div>
        )}

        {variant === 'searchInput' && value.length === 0 && (
          <div className={s.wrapperIconSearch}>
            <IconComponent className={`${s.searchIcon}`} name={'searchIcon'} />
          </div>
        )}
        {variant === 'searchInput' && value.length > 0 && (
          <div className={s.wrapperIconSearch}>
            <IconComponent className={`${s.searchIcon}`} name={'searchIcon'} />
            <div onClick={clearText}>
              <IconComponent className={s.closeIcon} name={'closeIcon'} />
            </div>
          </div>
        )}

        <input
          ref={inputRef}
          type={type}
          disabled={isDisabled}
          placeholder={placeholder}
          value={value}
          onChange={onChangeHandler}
          className={`${s.inputField} ${isDisabled ? s.styledDisabled : ''} `}
          id={'input'}
        ></input>

        {/*{isError && <div className={s.errorMessage}>Error</div>}*/}
      </div>
    </div>
  )
}
