import { ComponentProps, FC } from 'react'
import s from './table.module.scss'

export type RootProps = ComponentProps<'table'>
export const Root: FC<RootProps> = ({ className, ...rest }) => {
  return <table className={`${s.table} ${className}`} {...rest} />
}

export type HeaderProps = ComponentProps<'thead'>
export const Header: FC<HeaderProps> = ({ className, ...rest }) => {
  return <tbody className={`${s.header} ${className}`} {...rest} />
}

export type BodyProps = ComponentProps<'tbody'>

export const Body: FC<BodyProps> = ({ className, ...rest }) => {
  return <tbody className={`${s.body} ${className}`} {...rest} />
}

export type RowProps = ComponentProps<'tr'>

export const Row: FC<RowProps> = ({ className, ...rest }) => {
  return <tr className={`${s.row} ${className}`} {...rest} />
}

export type CellProps = ComponentProps<'td'>
export const Cell: FC<CellProps> = ({ className, ...rest }) => {
  return <td className={`${s.cell} ${className}`} {...rest} />
}

export const Table = {
  Root,
  Header,
  Body,
  Row,
  Cell,
}
