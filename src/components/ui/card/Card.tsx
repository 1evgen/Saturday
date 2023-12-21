import s from '@/components/ui/card/card.module.scss'
import { HTMLProps, ReactNode } from 'react'
interface ICard extends HTMLProps<HTMLDivElement> {
  children?: ReactNode
  className?: string
}

export const Card = (props: ICard) => {
  const { className, children, ...rest } = props
  return (
    <div className={`${s.card} ${className}`} {...rest}>
      {children}
    </div>
  )
}
