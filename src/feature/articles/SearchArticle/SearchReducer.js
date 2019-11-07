
import * as searchActionTypes from './SearchConstants';

export const initialState = {
  articles: [],
  error: null,
  loading: true
};

const Search = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case searchActionTypes.SEARCH_SUCCESS:
      return {
        ...state,
        ...payload,
        loading: false
      };
    case searchActionTypes.SEARCH_ERROR:
      return {
        articles: [],
        error: payload,
        loading: false
      };
    default:
      return {
        ...state
      };
  }
};

export default Search;
