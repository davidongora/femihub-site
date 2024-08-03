import React from 'react'
import { DataTable } from './Datatable'
import { columns } from './columns'

const Order = () => {
    return (
        <div className='mx-20 p-4'>
            <div className='flex flex-col gap-4 justify-start items-start'>
                <h2 className='text-2xl md:text-3xl lg:text-4xl tracking-tight leading-snug text-md my-4'>Your Orders</h2>
                <div className='h-400 lg:w-[80%] w-full'>
                    <DataTable data={[
                        {
                            id: "728ed52f",
                            amount: 100,
                            status: "pending",
                            email: "m@example.com",
                        },
                        {
                            id: "728ed52f",
                            amount: 200,
                            status: "pending",
                            email: "m@example.com",
                        },
                        // ...
                    ]} columns={columns} />
                </div>

            </div>

        </div>
    )
}

export default Order
