import { createElement, CSSProperties, FC } from 'react'
import allIcons from '@/components/Icon/allIcons'
import { IconName } from '@/components/Icon/types'

interface IProps {
  id?: string
  size?: number
  name: IconName
  className?: string
  svgProp?: React.SVGProps<SVGSVGElement>
  style?: CSSProperties
}
export const IconComponent: FC<IProps> = ({ id, name, size = 24, className, style }) =>
  createElement(allIcons[name], {
    id,
    width: size,
    height: size,
    className,
    style,
  })
