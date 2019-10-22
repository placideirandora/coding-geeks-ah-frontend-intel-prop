/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import { shallow } from 'enzyme';
import sinon from 'sinon';
import { Navbar } from './Nav';
import { document } from '../../__mocks__/windowEvent';

let url = null;
const renderNAvbar = (args) => {
  const defaultProps = {
    currentUser: {
      isAuthenticated: true,
      user: { username: 'carlos' }
    },
    login: jest.fn(),
    social: jest.fn(),
    profile: {
      profile: jest.fn(),
    },
    retrieveProfile: jest.fn(),
    search:
    {
      includes: jest.fn()
    },
  };
  const props = { ...defaultProps, ...args };
  // store = mockStore({ ...props });
  return shallow(<Navbar {...props} />);
};

const wrapper = renderNAvbar();
// console.log(wrapper.html());

describe('Render the Nav Bar', () => {
  it('Should render successfully', async () => {
    sinon.stub(window.location, 'replace');
    wrapper.setProps({ isAuthenticated: false });
    expect(wrapper).toHaveLength(1);
  });
});

describe('Render the Nav Bar', () => {
  beforeAll(() => {
    global.window = Object.create(window);
    url = '?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MiwiZW1haWwiOiJlcmljLm1hbGFiYTZAZ21haWwuY29tIiwicm9sZSI6InVzZXIiLCJ1c2VybmFtZSI6IkVyaWM2IiwiaWF0IjoxNTcxMjA1MTYyLCJleHAiOjE1NzEyOTE1NjJ9.ZdMucW9PC4K9PLJKX1G7cnWyHA2ihGfcBqhRT1-q4Co#';
    Object.defineProperty(window, 'location', {
      value: { href: url },
      writable: true,

    });
  });
  it('Should render successfully', async () => {
    expect(window.location.href).toEqual(url);
  });
  it('should test eventListerner', () => {
    const button = wrapper.find('.user-image');
    button.simulate('click', {});
    document.event({
      name: 'click',
      target: {
        parentNode: { classList: { contains: jest.fn(() => false) } },
        classList: { contains: jest.fn(() => false) }
      }
    });
    expect(wrapper).toHaveLength(1);
  });
});
