/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import { mount, shallow } from 'enzyme';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
import ViewProfileComponent, { ProfileComponent } from '../ViewProfileComponent';
import store from '../../../../app/store/index';

const renderProfile = args => {
  const initialProps = {
    userName: 'carlos',
    user: {},
    bio: {},
    image: {},
    getProfile: jest.fn(),
    authenticated: {
      username: ''
    },
    profile: {
      profile: {
        image: 'mama',
        bio: 'papa',
        userName: 'carslos'
      }
    }
  
  };
  const props = { ...initialProps, ...args };
  return shallow(<ProfileComponent {...props} />);
};
const wrapper = renderProfile();
const button = wrapper.find('button');
console.log(button.length);
console.log(wrapper.length);
console.log(wrapper.instance());


describe('View Profile Component Tests', () => {
  // const initialState = {
  //   login: {
  //     user: {
  //       username: 'someone'
  //     }
  //   }
  // };

  // const mockStore = configureStore();
  // let store;
  // let wrapper;
  // beforeEach(() => {
  //   store = mockStore(initialState);
  //   wrapper = mount(<Provider store={store}><ProfileComponent /></Provider>);
  // });

  it('should render the view profile component', () => {
    // const wrapper = renderProfile();
    // console.log(wrapper.debug());
    expect(wrapper.length).toEqual(1);
  });
  it('should render the view profile component', () => {
    // const wrapper = renderProfile();
    // console.log(wrapper.debug()); 
    // const input = wrapper.find('p');
    // expect(input.length).toEqual(1);
    expect(wrapper.length).toBe(1);
  });
  it('should click on the model', () => {
    button.simulate('click');
  });
});

describe('View Profile Component Tests', () => {
  const MyWrapper = mount(
    <Provider store={store}>
      <BrowserRouter>
        <ViewProfileComponent />
      </BrowserRouter>
    </Provider>
  );
  it('should render the component', () => {
    expect(MyWrapper.exists()).toBe(true);
  });
});
