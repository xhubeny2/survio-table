import { createStore } from "redux";
import { devToolsEnhancer } from 'redux-devtools-extension';

import { getDataKeys } from '../../utils/utils';
import rootReducer from '../reducers/rootReducer';

// SELECT DATASET

import { data } from '../../data/dataset';
// import { data } from '../../data/dataset2';
// import { data } from '../../data/dataset3';


const initialState = {
    pageSize: 10,
    data: data,
    tableFilter: getDataKeys(data)[0],
    filterValue: "",
    page: 1,
    dataLength: data.length,
    sort: getDataKeys(data)[0],
    isLoading: false,
};

const store = createStore(rootReducer, initialState, devToolsEnhancer());
export default store;