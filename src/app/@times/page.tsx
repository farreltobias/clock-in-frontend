import { DataTable } from '@/src/components/ui/data-table'

import { columns, Time } from './columns'

async function getData(): Promise<Time[]> {
  // Fetch data from your API here.
  return [
    {
      id: '728ed52f',
      date: new Date('2021-08-31'),
      clocked: [new Date('2021-08-31T08:30'), new Date('2021-08-31T17:30')],
      total: 9,
    },
    {
      id: '489e1d42',
      date: new Date('2021-09-01'),
      clocked: [new Date('2021-09-01T08:30'), new Date('2021-09-01T18:30')],
      overtime: 1,
      total: 10,
    },
    {
      id: 'f8e1d42',
      date: new Date('2021-09-02'),
      clocked: [new Date('2021-09-02T08:30'), new Date('2021-09-02T16:30')],
      negative: 1,
      total: 7,
    },
    {
      id: '728ed52f',
      date: new Date('2021-09-03'),
      clocked: [new Date('2021-09-03T08:30'), new Date('2021-09-03T17:30')],
      total: 9,
    },
    {
      id: '728ed52f',
      date: new Date('2021-09-04'),
      clocked: [new Date('2021-09-04T08:30'), new Date('2021-09-04T17:30')],
      total: 9,
    },
  ]
}

export default async function TimeTable() {
  const data = await getData()

  return (
    <div className="container mx-auto py-10">
      <DataTable columns={columns} data={data} />
    </div>
  )
}
