/* eslint-disable import/no-named-as-default */
/* eslint-disable import/named */
import React from 'react';
import { mount } from 'enzyme';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import SingleArticle from './ReadSingleArticleComponent';
import store from '../../../app/store/index';

const Wrapper = mount(
  <Provider store={store}>
    <BrowserRouter>
      <SingleArticle />
    </BrowserRouter>
  </Provider>
);

describe('StarRating Component Tests', () => {
  it('should render the component', () => {
    expect(Wrapper.exists()).toBe(true);
  });
});
