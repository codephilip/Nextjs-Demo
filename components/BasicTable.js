import {React, useMemo}from 'react'
import { useTable } from 'react-table'
import {COLUMNS} from './columns'
import {Product} from '../pages/products/[id]'

export const BasicTable = () => {

    const columns = useMemo(() => COLUMNS, [])
    const products = useMemo(() => Product, [])

   // const tableInstance = useTable({
    //    columns: columns,
    //    data: products
   // })

    const{
        getTableProps, 
        getTableBodyProps, 
        headerGroups, 
        rows, 
        prepareRow,
    } = tableInstance

    return(
        <table {...getTableProps()}>
            <thead>
                {headerGroups.map((headerGroup) => (
                <tr {...headerGroup.getHeaderGroupProps()}>
                    {headerGroup.headers.map((column) => (
                    <th {...column.getHeaderProps}>{column.render('Header')}</th>
                    ))}
                </tr>
                ))}
            </thead>


            <tbody{...getTableBodyProps()}>
            {
                rows.map(row => {
                    prepareRow(row)
                    return(
                        <tr{...row.getRowProps()}>
                            {row.cells.map((cell)=> {
                                return <td {...cell.getCellProps()}>{cell.render('cell')}</td>
                            })}
                        </tr>
                    )
                })
            }
            </tbody>
        </table>

    )
}