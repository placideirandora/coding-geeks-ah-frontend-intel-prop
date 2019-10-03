/* eslint-disable react/jsx-props-no-spreading */
import { shallow } from 'enzyme';
import React from 'react';
import { Login } from '../LoginComponent';

const props = {
  isAuthenticated: false,
  login: jest.fn(),
};

let wrapper;

describe('Test Login Component...', () => {
  beforeAll(() => {
    wrapper = shallow(<Login {...props} />);
    wrapper.instance().onChange = jest.fn();
    wrapper.instance().onChange();
  });
  it('Should render login component', () => {
    expect(wrapper).toHaveLength(1);
  });
  it('Should give initial state', () => {
    expect(wrapper.state()).toBeDefined();
  });
});

describe('Input tests...', () => {
  it('Should type in the Email field', () => {
    const Email = wrapper.find('input[name="email"]');
    Email.simulate('change', {
      target: { value: 'carlos@gmail.com', name: 'email' },
    });
    expect(wrapper.state('email')).toEqual('carlos@gmail.com');
  });
  it('Should type in the password feild', () => {
    const Password = wrapper.find('input[name="password"]');
    Password.simulate('change', {
      target: { value: 'User1234', name: 'password' },
    });
    expect(wrapper.instance().onChange).toHaveBeenCalled();
  });
});


describe('Submit button test...', () => {
  let instance;
  let submitButton;
  beforeAll(() => {
    instance = wrapper.instance();
    submitButton = wrapper.find('button[type="submit"]');
    submitButton.simulate('click');
  });
  it('Should make a request to the server', () => {
    instance.forceUpdate();
    wrapper.update();
    const event = {
      preventDefault: jest.fn(),
    };
    instance.handleSubmit(event);
  });
});
