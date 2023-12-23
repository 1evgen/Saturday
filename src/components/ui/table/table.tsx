import { ComponentProps, ComponentPropsWithoutRef, FC } from 'react'
import s from './table.module.scss'

export type ColumnType = {
  key: string
  accessor: 'Name' | 'Cards' | 'LastUpdate' | 'CreatedBy'
  sortable?: boolean
  title: string
}[]

export type SortType = {
  direction: 'asc' | 'desc'
  key: string
} | null

type TableDataItem = {
  id: string
  Name: string
  Cards: number
  LastUpdate: string
  CreatedBy: string
}

type ContentBody = {
  tableData: TableDataItem[]
  columns: ColumnType
  className?: string
} & ComponentPropsWithoutRef<'tbody'>

type TableHeaderType = {
  column: ColumnType
  onSort?: (sort: SortType) => void
  sort?: SortType
  className?: string
} & ComponentPropsWithoutRef<'thead'>

export type RootProps = ComponentProps<'table'>
export type HeaderProps = ComponentProps<'thead'>
export type BodyProps = ComponentProps<'tbody'>
export type RowProps = ComponentProps<'tr'>
export type CellProps = ComponentProps<'td'>

export const Root: FC<RootProps> = ({ className, ...rest }) => {
  return <table className={`${s.table} ${className}`} {...rest} />
}

export const Header: FC<HeaderProps> = ({ className, ...rest }) => {
  return <tbody className={`${s.header} ${className}`} {...rest} />
}

export const Body: FC<BodyProps> = ({ className, ...rest }) => {
  return <tbody className={`${s.body} ${className}`} {...rest} />
}

export const Row: FC<RowProps> = ({ className, ...rest }) => {
  return <tr className={`${s.row} ${className}`} {...rest} />
}

export const Cell: FC<CellProps> = ({ className, ...rest }) => {
  return <td className={`${s.cell} ${className}`} {...rest} />
}

export const TableHeader: FC<TableHeaderType> = ({ onSort, sort, column, className, ...rest }) => {
  return (
    <Table.Header className={`${className}`} {...rest}>
      <Table.Row>
        {column.map(el => {
          return <Table.Cell key={el.key}>{el.title}</Table.Cell>
        })}
      </Table.Row>
    </Table.Header>
  )
}

export const TableContentBody: FC<ContentBody> = ({ tableData, columns, className, ...rest }) => {
  return (
    <tbody className={`${className}`} {...rest}>
      {tableData.map(data => (
        <Table.Row key={data.id}>
          {columns.map(columnItem => (
            <Table.Cell key={columnItem.key}>{data[columnItem.accessor]}</Table.Cell>
          ))}
        </Table.Row>
      ))}
    </tbody>
  )
}

// export const TableSort: FC<
//   Omit<
//     ComponentPropsWithoutRef<'thead'> & {
//       columns: Column[]
//       onSort?: (sort: Sort) => void
//       sort?: Sort
//     },
//     'children'
//   >
// > = ({ columns, onSort, sort }) => {
//   return <div></div>
// }

export const Table = {
  Root,
  Header,
  Body,
  Row,
  Cell,
}
