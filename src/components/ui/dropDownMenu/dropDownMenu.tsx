import * as DropdownMenu from '@radix-ui/react-dropdown-menu'
import s from './dropDownMenu.module.scss'
import { ReactNode } from 'react'

type DropDownMenuPropsType = {
  menuComponent: ReactNode
  children: ReactNode
  aline?: 'start' | 'center' | 'end'
  sideOffset?: number
  className?: string
}

export const MyDropDownMenu = (props: DropDownMenuPropsType) => {
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
  className?: string
}

export const DropDownItem = (props: DropdownItemType) => {
  const { children, className } = props
  return <DropdownMenu.Item className={`${s.Items} ${className}`}>{children}</DropdownMenu.Item>
}

export const DropDownSeparator = () => {
  return (
    <>
      <DropdownMenu.Separator className={s.separator} />
    </>
  )
}
