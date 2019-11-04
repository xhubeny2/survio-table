import React, { memo } from 'react';

const TableHeaderCell = ({label, setSort, setPage, sorted}) => {

    const handleOnClick = () => {
        setSort(label);
        setPage(1);
    } 

    return(
        <th onClick={handleOnClick} style={{cursor: 'pointer'}}>
            {label.toUpperCase()}{sorted && '^'}
        </th>
    )
}

export default memo(TableHeaderCell);