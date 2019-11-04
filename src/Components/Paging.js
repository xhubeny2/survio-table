import React, { memo } from 'react';

const Paging = ({ 
        page, 
        setPage,
        pageSize,
        setPageSize,
        dataLength,
    }) => {

    const sizes = [5,10,50,100];

    const handleNextButton = () => {
        if (page*pageSize < dataLength) {
            setPage(++page);
        }
    }

    const handlePrevButton = () => {
        if (page > 1) {
            setPage(--page);
        }
    }

    const handleChangePageSize = event => {
        setPage(1);
        setPageSize(event.target.value);
    }

    return (
        <div className="paging">
            <div style={{width: '120px'}}> MH 2019</div>
            <div className='pages'>
                <button className='pagingButton' onClick={handlePrevButton} disabled={!(page > 1)}>Prev</button>
                Page: {page}
                <button className='pagingButton' onClick={handleNextButton} disabled={!(page*pageSize < dataLength)}>Next</button>
            </div>
            <div className='pageSize'>
                Page size:
                <select value={pageSize} onChange={handleChangePageSize}>
                    {sizes.map(s => <option value={s} key={s}>{s}</option> )}
                </select>
            </div>
        </div>
    )
}


export default memo(Paging);