import React, { memo } from 'react';

const TableRow = ({row, keys}) => { 

    const handleClick = () => {
        console.log(row);
    }

        return(
            <tr>
                {keys.map(key => <td key={key}>{row[key]}</td>)}
                <td>
                    <button className='tableButton' onClick={handleClick}>
                        Log Me!
                    </button>
                </td>
            </tr>
        )
};

export default memo(TableRow);