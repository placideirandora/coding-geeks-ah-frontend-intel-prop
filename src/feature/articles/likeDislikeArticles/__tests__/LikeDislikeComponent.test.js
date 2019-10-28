/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import { shallow } from 'enzyme';
import { LikeDislike } from '../LikeDislikeComponent';

describe('Like and Dislike Components tests', () => {
  const wrapper = shallow(<LikeDislike />);
  it('Should render a form inputs', () => {
    expect(wrapper.find('.likes').length).toBe(1);
    expect(wrapper.find('.dislikes').length).toBe(1);
    expect(wrapper.find('div').length).toBe(3);
  });
});

describe('Like and Dislike  Components tests', () => {
  const likeArticle = jest.fn();
  const dislikeArticle = jest.fn();
  const wrapper = shallow(
    <LikeDislike likeArticle={likeArticle} dislikeArticle={dislikeArticle} />
  );
  wrapper.setProps({ isAuthenticated: true });
  it('Should render like button', () => {
    const likeArticleBtn = wrapper.find('.fa').at(0);
    likeArticleBtn.props().onClick();
    wrapper.update();
    expect(likeArticle).toHaveBeenCalledTimes(1);
  });
  it('Should render dislike button', () => {
    const dislikeArticleBtn = wrapper.find('.fa').at(1);
    dislikeArticleBtn.props().onClick();
    wrapper.update();
    expect(dislikeArticle).toHaveBeenCalledTimes(1);
  });
});
