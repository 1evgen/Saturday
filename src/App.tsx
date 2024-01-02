// style={{ width: '400px', height: '300px', backgroundColor: 'white' }}

import { ColumnType, Table, TableContentBody, TableHeader } from '@/components/ui/table'
import dataTest from '@/components/ui/table/testData.json'

export function App() {
  let columnTest: ColumnType = [
    { key: 'Name', title: 'Name', sortable: false },
    { key: 'Cards', title: 'Cards', sortable: true },
    { key: 'LastUpdate', title: 'Last Update', sortable: true },
    { key: 'CreatedBy', title: 'Created by', sortable: false },
  ]
  return (
    <div>
      return (
      <Table.Root>
        <TableHeader column={columnTest} sort={{ key: 'LastUpdate', direction: 'asc' }} />
        <TableContentBody tableData={dataTest} columns={columnTest} />
      </Table.Root>
      )
    </div>
  )
}
