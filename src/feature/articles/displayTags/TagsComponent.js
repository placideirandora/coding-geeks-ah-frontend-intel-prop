import React from 'react';
import { connect } from 'react-redux';
import './Tags.scss';

const TagsComponent = ({ tags }) => (
  <>
    {tags
      ? tags.map((tag, { id }) => (
        <button className="article-tags" type="button" key={`${id}:${tag}`}>
          {tag}
        </button>
      ))
      : ''}
  </>
);

const mapStateToProps = ({ getSingleArticle }) => ({
  tags: getSingleArticle.article.tagList
});

export default connect(
  mapStateToProps,
  null
)(TagsComponent);
