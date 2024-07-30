'use client'

import { ColumnDef } from '@tanstack/react-table'
import dayjs from 'dayjs'
import { Info } from 'lucide-react'

import { Button } from '@/src/components/ui/button'

export type Time = {
  id: string
  date: Date
  clocked: Date[]
  negative?: number
  overtime?: number
  total: number
}

export const columns: ColumnDef<Time>[] = [
  {
    accessorKey: 'date',
    header: 'Date',
    cell: ({ row }) => {
      const date = dayjs(row.getValue('date'))
      const formatted = date.format('ddd DD')

      return formatted
    },
  },
  {
    accessorKey: 'clocked',
    header: 'Clocked Hours',
    cell: ({ row }) => {
      const [start, end] = row.getValue<Date[]>('clocked')

      const startHour = dayjs(start).format('HH:mm')
      const endHour = dayjs(end).format('HH:mm')

      return (
        <div className="flex gap-2">
          <span>{startHour}</span>
          <div className="flex items-center gap-[0.1rem]">
            <div className="h-[0.15rem] w-[0.15rem] rounded-full bg-foreground" />
            <div className="h-[0.15rem] w-[0.15rem] rounded-full bg-foreground" />
            <div className="h-[0.15rem] w-[0.15rem] rounded-full bg-foreground" />
          </div>
          <span>{endHour}</span>
        </div>
      )
    },
  },
  {
    accessorKey: 'negative',
    header: 'Negative Hours',
    cell: ({ row }) => {
      const negative = row.getValue<number | undefined>('negative')

      if (!negative) {
        return '--'
      }

      const formatted = `${negative}:00`
      return formatted
    },
  },
  {
    accessorKey: 'overtime',
    header: 'Overtime',
    cell: ({ row }) => {
      const overtime = row.getValue<number | undefined>('overtime')

      if (!overtime) {
        return '--'
      }

      const formatted = `${overtime}:00`
      return formatted
    },
  },
  {
    accessorKey: 'total',
    header: 'Total hours worked',
    cell: ({ row }) => {
      const total = row.getValue<number>('total')
      const formatted = `${total.toString().padStart(2, '0')}:00`

      return formatted
    },
  },
  {
    id: 'info',
    size: 40,
    cell: () => {
      return (
        <Button size="icon" variant="ghost">
          <Info className="stroke-primary" />
        </Button>
      )
    },
  },
]
