/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import { mount } from 'enzyme';
import { Provider } from 'react-redux';
import { UpdateProfileComponent } from '../UpdateProfileComponent';
import store from '../../../../app/store/index';

const authenticated = {
  user: {
    username: 'someone'
  }
};

const Wrapper = mount(
  <Provider store={store}>
    <UpdateProfileComponent authenticated={authenticated} />
  </Provider>
);


describe('View Profile Component Tests', () => {
  it('should render the component', () => {
    expect(Wrapper.exists()).toBe(true);
  });
});
