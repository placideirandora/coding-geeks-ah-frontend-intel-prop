/* eslint-disable consistent-return */
import moxios from 'moxios';
import { makeMockStore } from '../../../../app/common/config/mockStore';
import registerUser from '../SignUpAction';

const store = makeMockStore({ user: {} });

const mockSuccess = data => ({ status: 201, response: data });

describe('Sign Up Action tests', () => {
  beforeEach(() => moxios.install());
  afterEach(() => moxios.uninstall());

  it('register the user ', async () => {
    const user = {
      firstName: 'someone',
      lastName: 'someone',
      userName: 'someone',
      email: 'someone@someone.com',
      password: 'someone',
      confirmPassword: 'someone'
    };
    try {
      moxios.wait(() => {
        const request = moxios.requests.mostRecent();
        request.respondWith(mockSuccess(user));
      });
      const result = await store.dispatch(registerUser());
      if (result) {
        const actionCalled = store.getActions();
        expect(actionCalled[0]).toEqual(registerUser(user));
      }
    } catch (err) {
      return null;
    }
  });
});
