import { 
    SET_PAGE_SIZE, 
    SET_FILTER_VALUE, 
    SET_TABLE_FILTER, 
    SET_PAGE,
    SET_SORT,
    SET_LOADING,
 } from './constants'

export const setPageSize = pageSize => {
    return { type: SET_PAGE_SIZE, pageSize }
};

export const setTableFilter = filter => {
    return { type: SET_TABLE_FILTER, filter }
};

export const setFilterValue = value => {
    return { type: SET_FILTER_VALUE, value }
};
export const setPage = page => {
    return { type: SET_PAGE, page }
};

export const setSort = sort => {
    return {type: SET_SORT, sort}
};

export const setLoading = isLoading => {
    return {type: SET_LOADING, isLoading}
};