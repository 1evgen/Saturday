import * as Select from '@radix-ui/react-select'
import { IconComponent } from '@/components/Icon/IconComponent'
import s from './selecet.module.scss'
import { forwardRef, ReactNode, useState } from 'react'
import { Typography } from '@/components/ui/typography'

type PropsType = {
  placeholder: string
  className?: string
  values?: string[]
  onChangeValue?: () => void
}

export const SelectComponent = (props: PropsType) => {
  const [isOpen, setIsOpen] = useState(false)
  const OpenChangeSelect = () => {
    setIsOpen(!isOpen)
  }

  const { placeholder, values, onChangeValue, className } = props
  return (
    <div>
      <Select.Root open={isOpen} onOpenChange={OpenChangeSelect}>
        <Select.Trigger className={s.SelectTrigger}>
          <Select.Value placeholder={placeholder} />
          <Select.Icon className={s.Icon}>
            <IconComponent name={isOpen ? 'arrowUp' : 'arrowDown'} size={18} />
          </Select.Icon>
        </Select.Trigger>
        <Select.Portal>
          <Select.Content position={'popper'} className={s.SelectContent}>
            <Select.Viewport>
              <Select.Group>
                {values?.map(v => (
                  <SelectItem key={v} value={v}>
                    {v}
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
