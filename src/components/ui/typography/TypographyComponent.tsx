import { ComponentPropsWithoutRef, ElementType, ReactNode } from 'react'
import s from './typography.module.scss'

type variantsTypography =
  | 'Large'
  | 'h1'
  | 'h2'
  | 'h3'
  | 'body1'
  | 'body2'
  | 'subtitle1'
  | 'subtitle2'
  | 'caption'
  | 'overline'
  | 'link1'
  | 'link2'

type PropsType<TTag extends ElementType> = {
  variantName: variantsTypography
  children: ReactNode
  color?: string
  as: TTag
}
export function TypographyComponent<TTag extends ElementType = 'p'>(
  props: PropsType<TTag> & Omit<ComponentPropsWithoutRef<TTag>, keyof PropsType<TTag>>
) {
  const { children, variantName, as: Component = 'p', color, ...rest } = props

  return (
    <Component className={variantName ? s[variantName] : ''} {...rest}>
      {children}
    </Component>
  )
}
