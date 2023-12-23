import { Meta, Story } from '@storybook/react'
import { ColumnType, Table, TableContentBody, TableHeader } from '@/components/ui/table/table'
import dataTest from './testData.json'

const meta: Meta = {
  title: 'Components/table',
  component: Table.Root,
  args: {},
  parameters: {},
}

export default meta

export const TestTable: Story = () => (
  <Table.Root>
    <Table.Header>
      <Table.Row>
        <Table.Cell>Name</Table.Cell>
        <Table.Cell>Cards</Table.Cell>
        <Table.Cell>Last_Updated</Table.Cell>
        <Table.Cell>Created</Table.Cell>
      </Table.Row>
    </Table.Header>
    <Table.Body>
      {dataTest.map((row, index) => (
        <Table.Row key={index}>
          <Table.Cell>{row.Name}</Table.Cell>
          <Table.Cell>{row.Cards}</Table.Cell>
          <Table.Cell>{row.LastUpdate}</Table.Cell>
          <Table.Cell>{row.CreatedBy}</Table.Cell>
        </Table.Row>
      ))}
    </Table.Body>
  </Table.Root>
)

let columnTest: ColumnType = [
  { key: '1', title: 'Name', sortable: false, accessor: 'Name' },
  { key: '2', title: 'Cards', sortable: false, accessor: 'Cards' },
  { key: '3', title: 'Last Update', sortable: false, accessor: 'LastUpdate' },
  { key: '4', title: 'Created by', sortable: false, accessor: 'CreatedBy' },
]

export const TableTest2 = () => {
  return (
    <Table.Root>
      <TableHeader column={columnTest} />
      <TableContentBody tableData={dataTest} columns={columnTest} />
    </Table.Root>
  )
}

TestTable.args = {}
