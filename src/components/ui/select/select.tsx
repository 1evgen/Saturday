import * as Select from '@radix-ui/react-select'
import { IconComponent } from '@/components/Icon/IconComponent'
import s from './selecet.module.scss'
import { forwardRef, ReactNode, useState } from 'react'
import { Typography } from '@/components/ui/typography'

type option = {
  value: string
  label: string
}

type PropsType = {
  placeholder: string
  className?: string
  options?: option[]
  onChangeValue?: () => void
  disabled?: boolean
}

export const SelectComponent = (props: PropsType) => {
  const [isOpen, setIsOpen] = useState(false)
  const OpenChangeSelect = () => {
    setIsOpen(!isOpen)
  }

  const resetAutoFocus = (event: any) => {
    event.preventDefault()
  }

  const { placeholder, options, onChangeValue, disabled, className } = props
  return (
    <div>
      <Select.Root
        open={isOpen}
        onOpenChange={OpenChangeSelect}
        disabled={disabled}
        onValueChange={onChangeValue}
      >
        <Select.Trigger className={s.SelectTrigger}>
          <Typography variant={'body1'} className={s.disabledText}>
            <Select.Value placeholder={placeholder} />
          </Typography>
          <Select.Icon className={s.Icon}>
            <IconComponent
              name={isOpen ? 'arrowUp' : 'arrowDown'}
              size={18}
              className={s.IconStyle}
            />
          </Select.Icon>
        </Select.Trigger>
        <Select.Portal>
          <Select.Content
            position={'popper'}
            onCloseAutoFocus={resetAutoFocus}
            className={s.SelectContent}
          >
            <Select.Viewport>
              <Select.Group>
                {options?.map(items => (
                  <SelectItem key={items.value} value={items.value}>
                    {items.label}
                  </SelectItem>
                ))}
              </Select.Group>
            </Select.Viewport>
          </Select.Content>
        </Select.Portal>
      </Select.Root>
    </div>
  )
}

type SelectItemProps = {
  children: ReactNode
  className?: string
  value: string
}

const SelectItem = forwardRef<HTMLDivElement, SelectItemProps>(
  ({ children, value, className, ...props }, ref) => {
    return (
      <Select.Item value={value} className={`${s.SelectItem} ${className}`} {...props} ref={ref}>
        <Select.ItemText>{<Typography variant={'body1'}>{children}</Typography>}</Select.ItemText>
      </Select.Item>
    )
  }
)
