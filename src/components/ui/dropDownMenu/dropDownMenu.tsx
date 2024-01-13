import * as DropdownMenu from '@radix-ui/react-dropdown-menu'
import s from './dropDownMenu.module.scss'
import { ReactNode } from 'react'

type DropDownMenuPropsType = {
  menuComponent: ReactNode
  children: ReactNode
  aline?: 'start' | 'center' | 'end'
  sideOffset?: number
}

export const DropDownMenu = (props: DropDownMenuPropsType) => {
  const { menuComponent, children, aline = 'end', sideOffset = 3 } = props
  return (
    <DropdownMenu.Root>
      <DropdownMenu.Trigger>{menuComponent}</DropdownMenu.Trigger>
      <DropdownMenu.Portal>
        <DropdownMenu.Content className={s.ContentArea} align={aline} sideOffset={sideOffset}>
          {children}
        </DropdownMenu.Content>
      </DropdownMenu.Portal>
    </DropdownMenu.Root>
  )
}

type DropdownItemType = {
  children: ReactNode
  icon?: ReactNode
  label?: string
}

export const DropDownItem = (props: DropdownItemType) => {
  const { children } = props

  return (
    <div>
      <DropdownMenu.Item>{children}</DropdownMenu.Item>
    </div>
  )
}
