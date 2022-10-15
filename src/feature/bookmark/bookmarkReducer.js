import {
  BOOKMARK_SUCCESS,
  BOOKMARK_FAIL,
  UNBOOKMARK_SUCCESS,
  UNBOOKMARK_FAIL,
  GET_BOOKMARKS_SUCCESS
} from './bookmarkTypes';

export const initialState = {
  bookmarks: [],
  loading: true,
};

const bookmarkReducers = (state = initialState, action) => {
  const { payload, type } = action;
  switch (type) {
    case GET_BOOKMARKS_SUCCESS: return {
      ...state,
      ...payload,
      loading: false,
    };
    case BOOKMARK_SUCCESS: return {
      ...state,
      payload
    };
    case BOOKMARK_FAIL: return {
      ...state,
      payload
    };
    case UNBOOKMARK_SUCCESS: return {
      ...state,
      bookmarks: state.bookmarks
        .filter(({ articleId }) => Number(articleId) !== Number(payload.articleId))
    };
    case UNBOOKMARK_FAIL: return {
      ...state,
      payload
    };
    default: return state;
  }
};

export default bookmarkReducers;
