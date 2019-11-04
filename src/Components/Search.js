import React, { useState, useEffect, memo } from 'react';
import { useDebounce } from '../utils/utils';

const Search = ({
    setPage,
    filterValue,
    setFilterValue,
    tableFilter,
    setTableFilter,
    keys,
    setLoading,
    }) => {

    const [searchTerm, setSearchTerm] = useState(filterValue);

    const debouncedSearchTerm = useDebounce(searchTerm, 500);

    useEffect(
        () => {
            setFilterValue(debouncedSearchTerm);
            setLoading(false);
        },
        [debouncedSearchTerm, setFilterValue, setPage, setLoading]
    );
    
    const handleChangeFilterValue = event => {
        setLoading(true);
        setPage(1);
        setSearchTerm(event.target.value);
    }

    const handleChangeFilter = event => setTableFilter(event.target.value);

    return(
        <div className="search">
            <span className='searchLabel'>SEARCH:</span> 
            <select 
                value={tableFilter} 
                onChange={handleChangeFilter} 
                className='selector'
            >
                {keys.map((k, index) => (
                    <option key={index}value={k}>{k.toUpperCase()}</option>
                ))}
            </select>
            <input 
                type="text" 
                value={searchTerm} 
                onChange={handleChangeFilterValue} 
                className='searchInput'
            />
        </div>
    )
}

export default memo(Search);