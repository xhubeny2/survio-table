import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import * as tableActions from '../redux/actions/actions';

import Paging from './Paging';
import Search from './Search';
import TableBody from './TableBody';
import Loader from './Loader';

import { compare, getDataKeys } from '../utils/utils';

const ConnectedTable = ({
    setPageSize, 
    setTableFilter, 
    setFilterValue, 
    tableFilter, 
    filterValue, 
    pageSize, 
    data, 
    page,
    setPage,
    displayedData,
    dataLength,
    setSort,
    sort,
    isLoading,
    setLoading,
    }) => {

    const [keys, setKeys] = useState([]);

    useEffect(() => {
        setKeys(getDataKeys(data));
    }, [data])

    return (
        <>
            <Search 
                setPage={setPage}
                filterValue={filterValue}
                setFilterValue={setFilterValue}
                tableFilter={tableFilter}
                setTableFilter={setTableFilter}
                keys={keys}
                setLoading={setLoading}
            />
            {isLoading ?
            <Loader />
            :
            <TableBody 
                keys={keys} 
                setSort={setSort} 
                sort={sort} 
                displayedData={displayedData} 
                setPage={setPage}
            />}
            <Paging 
                setPage={setPage} 
                setPageSize={setPageSize} 
                page={page} 
                pageSize={pageSize} 
                dataLength={dataLength}
            />
        </>
    )
}

const mapStateToProps = state => {
    const { tableFilter, filterValue, data, page, pageSize, sort, isLoading } = state;
    
    const lowPageIndex = (page-1)*pageSize;
    const highPageIndex = pageSize*page;
    const filteredData = data.filter(
                d => d[tableFilter].toString().toLowerCase().indexOf(filterValue.toLowerCase()) !== -1
            ).sort(compare(sort));
    const displayedData = filteredData.slice(lowPageIndex,highPageIndex)

    return({
        data,
        pageSize,
        tableFilter,
        filterValue,
        page,
        sort,
        displayedData,
        isLoading,
        dataLength: filteredData.length,
    })
};

const mapDispatchToProps = dispatch => (
    bindActionCreators(tableActions, dispatch)
);

const Table = connect(mapStateToProps, mapDispatchToProps) (ConnectedTable);

export default Table;