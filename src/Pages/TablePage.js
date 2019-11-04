import React from 'react';
import Table from '../Components/Table';
import { Link } from 'react-router-dom';


const TablePage = () => (
    <div className='pageTable'>
        <div className='tableHeader'>
                <div className='textTable'>
                    <Link to="/home">
                        <div className='textTableRegular'>avesome</div>
                        <div className='textTableBold'>TABLE</div>
                    </Link>
                </div>           
        </div>
        <Table />
    </div>
)

export default TablePage;