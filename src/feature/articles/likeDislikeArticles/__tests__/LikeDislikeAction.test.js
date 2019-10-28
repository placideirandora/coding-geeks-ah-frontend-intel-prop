import moxios from 'moxios';
import { makeMockStore } from '../../../../app/common/config/mockStore';
import { likeArticle, dislikeArticle } from '../LikeDislikeAction';
import mockArticle from '../../../../__mocks__/mockData';

import {
  GET_SINGLE_ARTICLE_SUCCESS,
  LIKE_ARTICLE_FAIL,
  DISLIKE_ARTICLE_FAIL
} from '../../constants';

const store = makeMockStore({ article: {} });
describe('Like Article Action', () => {
  beforeEach(() => moxios.install());
  afterEach(() => {
    moxios.uninstall();
    store.clearActions();
  });
  test('Should dispatch LIKE_ARTICLE_FAIL action', () => {
    const error = 'No articles the moment';
    moxios.wait(() => {
      const request = moxios.requests.mostRecent();
      request.respondWith({
        status: 400,
        response: {
          data: {
            error: 'Unable to like this article'
          }
        }
      });
    });
    return store.dispatch(likeArticle(error)).then(() => {
      expect(store.getActions().length).toEqual(1);
    });
  });
});

describe('Dislike Article Action', () => {
  beforeEach(() => moxios.install());
  afterEach(() => {
    moxios.uninstall();
    store.clearActions();
  });
  it('Should dispatch DISLIKE_ARTICLE_SUCCESS action', async () => {
    const error = 'No articles the moment';
    moxios.wait(() => {
      const request = moxios.requests.mostRecent();
      request.respondWith({
        status: 400,
        response: {
          data: {
            error: 'Unable to like this article'
          }
        }
      });
    });
    return store.dispatch(dislikeArticle(error)).then(() => {
      expect(store.getActions().length).toEqual(1);
    });
  });
});

describe('Like and Dislike sucess  Article Actions ', () => {
  beforeEach(() => moxios.install());
  afterEach(() => {
    moxios.uninstall();
    store.clearActions();
  });
  const slug = 'Should dispatch GET_SINGLE_ARTICLE_SUCCESS-3244';
  it('Should dispatch DISLIKE_ARTICLE_SUCCESS action', async () => {
    moxios.wait(() => {
      const request = moxios.requests.mostRecent();
      request.respondWith({
        status: 200,
        response: {
          data: {
            article: mockArticle.article
          }
        }
      });
    });
    await store.dispatch(likeArticle(slug));
    expect(store.getActions().length).toEqual(1);
  });
  it('Should dispatch  GET_SINGLE_ARTICLE_SUCCESS action', async () => {
    moxios.wait(() => {
      const request = moxios.requests.mostRecent();
      request.respondWith({
        status: 200,
        response: {
          data: {
            article: mockArticle.article
          }
        }
      });
    });
    return store.dispatch(dislikeArticle(slug)).then(() => {
      expect(store.getActions().length).toEqual(1);
    });
  });
});
describe('SERVER ERROR', () => {
  it('Should return an error', async () => {
    const slug = 'Should dispatch GET_SINGLE_ARTICLE_SUCCESS-3244';
    const expected = [
      {
        payload: 'jwt malformed',
        type: 'DISLIKE_ARTICLE_FAIL'
      }
    ];
    await store.dispatch(dislikeArticle(slug));
    expect(store.getActions()).toEqual(expected);
  });
});
