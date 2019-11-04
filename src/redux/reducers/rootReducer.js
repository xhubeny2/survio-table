import { 
  SET_PAGE_SIZE, 
  SET_TABLE_FILTER, 
  SET_FILTER_VALUE, 
  SET_PAGE, 
  SET_SORT,
  SET_LOADING
} from '../actions/constants';

const rootReducer = (state = {}, action) => {
    switch (action.type) {
        case SET_PAGE_SIZE:
          return Object.assign({}, state, {
            pageSize: action.pageSize
          })
        case SET_TABLE_FILTER:
          return Object.assign({}, state, {
            tableFilter: action.filter
          })
        case SET_FILTER_VALUE:
          return Object.assign({}, state, {
            filterValue: action.value
          })
        case SET_PAGE:
          return Object.assign({}, state, {
            page: action.page
          })
        case SET_SORT:
          return Object.assign({}, state, {
            sort: action.sort
          })
        case SET_LOADING:
          return Object.assign({}, state, {
            isLoading: action.isLoading
          })
        default:
          return state
    }
};

export default rootReducer;