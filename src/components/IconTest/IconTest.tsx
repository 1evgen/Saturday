import { createElement, FC, MouseEventHandler } from 'react'
import allIcons from '@/components/IconTest/allIcons'
import { IconName } from '@/components/IconTest/types'

interface IProps {
  id?: string
  size?: number
  name: IconName
  className?: string
  onClick?: MouseEventHandler<SVGElement>
}
export const IconTest: FC<IProps> = ({ id, name, size = 24, className }) =>
  createElement(allIcons[name], {
    id,
    width: size,
    height: size,
    className,
  })
