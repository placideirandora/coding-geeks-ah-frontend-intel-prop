/* eslint-disable react/destructuring-assignment */
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
// import GetSingleArticle from './GetSingleArticleComponent';
class GetAllArticles extends Component {
  componentDidMount() {
    this.props.getAllArticles();
  }

  render() {
    const { articles } = this.props;
    return (
      <div className="mainDiv">
        <div className="main--banner" />
        <Link to="">
          <div className="article article-main--wrapper">
            <div className="article article__image" />
            <div className="article user--wrapper">
              <div className="article user__avatar" />
              <div className="article user__name">{}</div>
            </div>
            <div className="article article--wrapper">
              <div className="article article__title" />
              <div className="article article__description" />
            </div>
          </div>
        </Link>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  articles: state.getAllArticles.articles
});

export default connect(
  mapStateToProps,
  { getAllArticles }
)(GetAllArticles);
