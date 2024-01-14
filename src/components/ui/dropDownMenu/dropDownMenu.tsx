import * as DropdownMenu from '@radix-ui/react-dropdown-menu'
import s from './dropDownMenu.module.scss'
import { ReactNode } from 'react'
import { Typography } from '@/components/ui/typography'

type DropDownMenuPropsType = {
  menuComponent: ReactNode
  children: ReactNode
  aline?: 'start' | 'center' | 'end'
  sideOffset?: number
  className?: string
}

export const DropDownMenu = (props: DropDownMenuPropsType) => {
  const { menuComponent, children, aline = 'end', sideOffset = 3, className } = props
  return (
    <DropdownMenu.Root>
      <DropdownMenu.Trigger>{menuComponent}</DropdownMenu.Trigger>
      <DropdownMenu.Portal>
        <DropdownMenu.Content
          className={`${s.ContentArea} ${className}`}
          align={aline}
          sideOffset={sideOffset}
        >
          {children}
        </DropdownMenu.Content>
      </DropdownMenu.Portal>
    </DropdownMenu.Root>
  )
}

type DropdownItemType = {
  children: ReactNode
  label?: string
}

export const DropDownItem = (props: DropdownItemType) => {
  const { children } = props

  return (
    <div className={s.wrapperItems}>
      <DropdownMenu.Item className={`${s.Items}`}>
        <Typography variant={'caption'}>{children}</Typography>
      </DropdownMenu.Item>
    </div>
  )
}

export const DropDownSeparator = () => {
  return (
    <>
      <DropdownMenu.Separator className={s.separator} />
    </>
  )
}
