import moxios from 'moxios';
import appMockStore from '../../../../__mocks__/mockStoreConfig';
import getAllArticles from '../GetAllArticlesAction';
import { GET_ARTICLES_SUCCESS, GET_ARTICLES_FAIL } from '../../constants';

const store = appMockStore({});

describe('Create Article success', () => {
  beforeEach(() => {
    moxios.install();
  });
  afterEach(() => {
    moxios.uninstall();
    store.clearActions();
  });

  test('Should return GET_ARTICLES_SUCCESS action', () => {
    moxios.wait(() => {
      const request = moxios.requests.mostRecent();
      request.respondWith({
        status: 200
      });
    });
    const expectedAction = [GET_ARTICLES_SUCCESS];
    return store.dispatch(getAllArticles()).then(() => {
      const dispatchedActions = store.getActions();

      const dispatchedTypes = dispatchedActions.map(action => action.type);
      expect(dispatchedTypes).toEqual(expectedAction);
    });
  });
  test('Should return GET_ARTICLES_FAIL action', () => {
    moxios.wait(() => {
      const request = moxios.requests.mostRecent();
      request.respondWith({ 
        status: 404,
        response: {
          error: 'No articles found at the monent'
        }
      });
    });
    const expectedAction = [GET_ARTICLES_FAIL];
    return store.dispatch(getAllArticles()).then(() => {
      const dispatchedActions = store.getActions();

      const dispatchedTypes = dispatchedActions.map(action => action.type);
      expect(dispatchedTypes).toEqual(expectedAction);
    });
  });
});
