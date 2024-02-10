import * as Checkbox from '@radix-ui/react-checkbox'
import s from './checkbox.module.scss'
import { IconComponent } from '@/components/Icon/IconComponent'
import { Typography } from '@/components/ui/typography'

type CheckboxType = {
  checked?: boolean
  onValueChange: () => void
  label?: string
  id?: string
  disabled?: boolean
}

export const CheckboxComponent = (props: CheckboxType) => {
  const { checked, onValueChange, label, id, disabled } = props
  return (
    <div className={s.checkboxWrapper}>
      <Checkbox.Root
        disabled={disabled}
        className={s.CheckboxRoot}
        checked={checked}
        onCheckedChange={onValueChange}
        id={id}
      >
        <Checkbox.Indicator className={s.CheckboxIndicator} asChild forceMount id={id}>
          {checked ? (
            <IconComponent name={'activeCheckbox'} className={s.styleCheckedIcon} />
          ) : (
            <IconComponent name={'notActiveCheckboxIcon'} className={s.styUncheckedIcon} />
          )}
        </Checkbox.Indicator>
      </Checkbox.Root>
      <Typography as={'label'} variant={'body2'} className={s.label} id={id}>
        {label}
      </Typography>
    </div>
  )
}
