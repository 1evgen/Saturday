import * as RadioGroup from '@radix-ui/react-radio-group'
import s from './radio.module.scss'
import { Typography } from '@/components/ui/typography'

export type RadioValueType = {
  id: string
  value: string
  label?: string
}

type PropsType = {
  values: RadioValueType[]
  disabled?: boolean
}

export const RadioGroupComponent = (props: PropsType) => {
  const { values, disabled } = props

  return (
    <RadioGroup.Root className={s.RadioGroup} disabled={disabled}>
      {values.map(e => (
        <div className={`${s.RadioItemWrapper} ${disabled ? s.disabledStyled : ''}`}>
          <RadioGroup.Item
            value={e.value}
            id={e.id}
            className={`${s.RadioItem}  ${disabled ? s.disabledStyled : ''}`}
          >
            <RadioGroup.Indicator
              className={`${s.RadioGroupIndicator} ${disabled ? s.disabledStyled : ''}`}
            />
          </RadioGroup.Item>
          <label className={`${s.Label} ${disabled ? s.disabledTypography : ''}`} htmlFor={e.id}>
            <Typography
              as={'label'}
              variant={'body2'}
              className={`${disabled ? s.disabledTypography : ''}`}
            >
              {e.label}
            </Typography>
          </label>
        </div>
      ))}
    </RadioGroup.Root>
  )
}
