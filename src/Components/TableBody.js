import React from 'react';

import TableHeaderCell from './TableHeaderCell';
import TableRow from './TableRow';

const TableBody = ({keys, setSort, sort, displayedData, setPage}) => {
    
    const getHeader = () => (
        keys.map((k, index) => 
            <TableHeaderCell key={index} label={k} setSort={setSort} setPage={setPage} sorted={sort === k} />
        )
    )

    const getRows = () => (
        displayedData.map((row) => <TableRow key={row.id} row={row} keys={keys} />)
    )

    return (
        <div className='table-container'>
            <table>
                <thead>
                    <tr>
                        {getHeader()}
                        <th>ACTION</th>
                    </tr>
                </thead>
                <tbody>
                    {getRows()}
                </tbody>
            </table>
        </div>
    )
}

export default TableBody;