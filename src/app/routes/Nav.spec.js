import React from 'react';
import configureStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import promiseMiddleware from 'redux-promise-middleware';
import { mount } from 'enzyme';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import sinon from 'sinon';
import Nav from './Nav';

const middlewares = [thunk, promiseMiddleware];
const mockStore = configureStore(middlewares);
const store = mockStore({
  isAuthenticated: false,
  social: jest.fn(),
  login: jest.fn(),
});
let wrapper;

describe('Render the Nav Bar', () => {
  it('Should render successfully', async () => {
    wrapper = mount(
      <Provider store={store}>
        <BrowserRouter>
          <Nav />
        </BrowserRouter>
      </Provider>
    );
    sinon.stub(window.location, 'replace');
    expect(wrapper).toMatchSnapshot();
  });
});
