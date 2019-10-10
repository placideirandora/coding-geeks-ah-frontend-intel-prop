import { GET_ARTICLES_SUCCESS, GET_ARTICLES_FAIL } from '../constants';

export const initialState = {
  articles: []
};

export default (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case GET_ARTICLES_SUCCESS:
      return {
        ...state,
        ...payload
      };
    case GET_ARTICLES_FAIL:
      return { ...state, ...payload };
    default:
      return {
        ...state
      };
  }
};
