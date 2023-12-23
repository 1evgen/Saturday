// style={{ width: '400px', height: '300px', backgroundColor: 'white' }}

import { ColumnType, Table, TableContentBody, TableHeader } from '@/components/ui/table/table'
import dataTest from '@/components/ui/table/testData.json'

export function App() {
  let columnTest: ColumnType = [
    { key: '1', title: 'Name', sortable: false, accessor: 'Name' },
    { key: '2', title: 'Cards', sortable: false, accessor: 'Cards' },
    { key: '3', title: 'Last Update', sortable: false, accessor: 'LastUpdate' },
    { key: '4', title: 'Created by', sortable: false, accessor: 'CreatedBy' },
  ]

  return (
    <div>
      <Table.Root>
        <TableHeader column={columnTest}>
          <TableContentBody tableData={dataTest} columns={columnTest} />
        </TableHeader>
      </Table.Root>
    </div>
  )
}
