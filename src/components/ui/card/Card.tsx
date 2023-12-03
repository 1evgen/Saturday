import s from '@/components/ui/card/card.module.scss'
import { ReactNode } from 'react'
interface ICard {
  children?: ReactNode
  className?: string
}

export const Card = (props: ICard) => {
  const { className } = props
  return <div className={`${s.card} ${className}`}></div>
}
