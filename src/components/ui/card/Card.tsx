import s from '@/components/ui/card/card.module.scss'
import { HTMLProps } from 'react'
interface ICard extends HTMLProps<HTMLDivElement> {
  className?: string
}

export const Card = (props: ICard) => {
  const { className, ...rest } = props
  return <div className={`${s.card} ${className}`} {...rest}></div>
}
