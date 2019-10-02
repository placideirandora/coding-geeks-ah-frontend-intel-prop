import moxios from 'moxios';
import appMockStore from '../../../__mocks__/mockStoreConfig';
import createArticle from '../createArticle/createArticleAction';
import {
  CREATE_ARTICLE_SUCCESS,
  CREATE_ARTICLE_FAIL
} from '../createArticle/constants';

describe('Create Article success', () => {
  beforeEach(() => {
    moxios.install();
  });
  afterEach(() => {
    moxios.uninstall();
  });

  test('Should return CREATE_ARTICLE_SUCCESS action', () => {
    moxios.wait(() => {
      const request = moxios.requests.mostRecent();
      request.respondWith({
        status: 201
      });
    });
    const mockArticles = {
      title: 'So I the last one standing',
      description: 'I knew that would happen soon but i kept it inside',
      body: 'I knew that would happen soon but i kept it inside'
    };

    const expectedAction = [CREATE_ARTICLE_SUCCESS];
    const store = appMockStore({});
    return store.dispatch(createArticle(mockArticles)).then(() => {
      const dispatchedActions = store.getActions();
      const dispatchedTypes = dispatchedActions.map(action => action.type);

      expect(dispatchedTypes).toEqual(expectedAction);
    });
  });
  test('Should return CREATE_ARTICLE_FAIL action', () => {
    moxios.wait(() => {
      const request = moxios.requests.mostRecent();
      request.respondWith({
        status: 400,

        data: {
          error: 'title is requiredB'
        }
      });
    });
    const mockArticles = {
      description: 'I knew that would happen soon but i kept it inside',
      body: 'I knew that would happen soon but i kept it inside'
    };

    const expectedAction = [CREATE_ARTICLE_FAIL];
    const store = appMockStore({});
    return store.dispatch(createArticle(mockArticles)).then(() => {
      const dispatchedActions = store.getActions();
      const dispatchedTypes = dispatchedActions.map(action => action.type);

      expect(dispatchedTypes.length).toEqual(expectedAction);
    });
  });
});
