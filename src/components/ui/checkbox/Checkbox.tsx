import * as Checkbox from '@radix-ui/react-checkbox'
import s from './checkbox.module.scss'
import { IconComponent } from '@/components/Icon/IconComponent'
import { Typography } from '@/components/ui/typography'

type CheckboxType = {
  checked: boolean
  setChecked: () => void
  label?: string
  id: string
  disabled?: boolean
}

export const CheckboxComponent = (props: CheckboxType) => {
  const { checked, setChecked, label, id, disabled } = props
  return (
    <div className={s.checkboxWrapper}>
      <Checkbox.Root
        disabled={disabled}
        className={s.CheckboxRoot}
        checked={checked}
        onCheckedChange={setChecked}
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
      <Typography variant={'body2'} as={'label'} htmlFor={id} className="Label">
        {label}
      </Typography>
    </div>
  )
}
