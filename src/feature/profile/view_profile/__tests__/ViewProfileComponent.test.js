/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import { shallow } from 'enzyme';
import { ViewProfileComponent } from '../ViewProfileComponent';

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
  return shallow(<ViewProfileComponent {...props} />);
};

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
    expect(wrapper.state('show')).toEqual(true);
  });
});
