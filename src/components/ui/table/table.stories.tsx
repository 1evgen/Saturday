import { Meta, Story } from '@storybook/react'
import { Table } from '@/components/ui/table/table'

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
        <Table.Cell> Last Updated </Table.Cell>
        <Table.Cell>Created</Table.Cell>
      </Table.Row>
    </Table.Header>
    <Table.Body>
      <Table.Row>
        <Table.Cell>Pack Name</Table.Cell>
        <Table.Cell>4</Table.Cell>
        <Table.Cell>18.03.2021</Table.Cell>
        <Table.Cell>Ivan Ivanov</Table.Cell>
      </Table.Row>
      <Table.Row>
        <Table.Cell>Pack Name</Table.Cell>
        <Table.Cell>5</Table.Cell>
        <Table.Cell>18.03.2021</Table.Cell>
        <Table.Cell>Ivan Ivanov</Table.Cell>
      </Table.Row>
      <Table.Row>
        <Table.Cell>Pack Name</Table.Cell>
        <Table.Cell>6</Table.Cell>
        <Table.Cell>18.03.2021</Table.Cell>
        <Table.Cell>Ivan Ivanov</Table.Cell>
      </Table.Row>
    </Table.Body>
  </Table.Root>
)

TestTable.args = {}
