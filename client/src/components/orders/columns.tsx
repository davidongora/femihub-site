"use client"

import { ColumnDef } from "@tanstack/react-table"
import { DataTableColumnHeader } from "./DataColumnHeader"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "../../shad/ui/dropdown-menu"
import { MoreHorizontal } from "lucide-react"

// This type is used to define the shape of our data.
// You can use a Zod schema here if you want.
export type Payment = {
  id: string
  amount: number
  status: "pending" | "processing" | "success" | "failed"
  email: string
}

export const columns: ColumnDef<Payment>[] = [
  {
    id: "actions",
    cell: ({ row }) => {
      const payment = row.original
 
      return (
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <button className="h-8 w-8 p-1">
              <span className="sr-only">Open menu</span>
              <MoreHorizontal className="h-4 w-4" />
            </button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end" className="bg-white">
            <DropdownMenuLabel>Actions</DropdownMenuLabel>
            <DropdownMenuItem
              onClick={() => navigator.clipboard.writeText(payment.id)}
            >
              Copy payment ID
            </DropdownMenuItem>
            <DropdownMenuSeparator />
            <DropdownMenuItem>View customer</DropdownMenuItem>
            <DropdownMenuItem>View payment details</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      )
    },
  },
  {
    accessorKey: "status",
    header: ({column})=>{
      return <DataTableColumnHeader column={column} title={"Status"}/>
    },
    cell:({row})=>{
      return <p className="ftext-left rounded-full bg-orange-600 text-white w-fit px-2 text-balance text-sm leading-tight tracking-tight py-1 text-center">{row.original.status}</p>
    }
  },
  {
    accessorKey: "email",
    header: ({column})=>{
      return <DataTableColumnHeader column={column} title={"Email"}/>
    },
  },
  {
    accessorKey: "amount",
    header: ({column})=>{
      return <DataTableColumnHeader column={column} title="Amount"/>
    },
    cell:({ row }) => {
      const amount = parseFloat(row.getValue("amount"))
      const formatted = new Intl.NumberFormat("en-US", {
        style: "currency",
        currency: "USD",
      }).format(amount)
 
      return <div className="text-left font-medium">{formatted}</div>
    },
  },
]
