/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import { mount, shallow } from 'enzyme';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import ViewProfileComponent, { ProfileComponent } from '../ViewProfileComponent';
import store from '../../../../app/store/index';

const renderProfile = () => {
  const initialProps = {
    user: {},
    bio: {},
    image: {},
    getProfile: jest.fn(),
    authenticated: {
      username: 'someone'
    },
    profile: {
      profile: {
        image: 'someone',
        bio: 'someone',
        userName: 'someone'
      }
    }
  };
  const props = { ...initialProps };
  return shallow(<ProfileComponent {...props} />);
};

describe('Rendering the View Profile Component', () => {
  const wrapper = mount(
    <Provider store={store}>
      <BrowserRouter>
        <ViewProfileComponent />
      </BrowserRouter>
    </Provider>
  );

  it('should render the component', () => {
    expect(wrapper.exists()).toBe(true);
  });
});

describe('View Profile Component Tests', () => {
  const wrapper = renderProfile();
  const button = wrapper.find('button');

  it('should render the view profile component', () => {
    expect(wrapper.length).toEqual(1);
  });
  it('should render the view profile component', () => {
    expect(wrapper.length).toBe(1);
  });
  it('should click on the model', () => {
    button.simulate('click');
  });
});
