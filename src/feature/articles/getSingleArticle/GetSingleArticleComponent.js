/* eslint-disable react/destructuring-assignment */
/* eslint-disable no-shadow */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link, BrowserRouter } from 'react-router-dom';
import momemt from 'moment';
import ReactHtmlParser from 'react-html-parser';
import GetSingleArticle from './GetSingleArticleAction';
import LikeDislikeArticle from '../likeDislikeArticles/LikeDislikeComponent';
import StarRating from '../starRating/StarRatingComponent';
import AverageRating from '../averageRating/AverageRatingComponent';
import DisabledStar from '../starRating/DisabledStarComponent';
import DefaultAvatar from '../../../app/common/images/avatar.png';
import ellipsis from '../../../app/common/images/ellipsis.png';
import bookmark from '../../../app/common/images/bookmark.png';
import ShareArticle from '../shareArticle/ShareArticleComponent';
import FollowUnfollowComponent from '../../followUnfollow/FollowUnfollowComponent';
import CommentCountComponent from '../../../app/common/CommentCount/CommentCountComponent';
import ArticleMenuDropdown from '../../../app/common/articleMenu/ArticleDropdownMenu';
import deleteArticle from '../deleteArticle/DeleteAction';
import './GetSingleArticle.scss';

export class ViewSingleArticle extends Component {
  constructor(props) {
    super(props);
    this.state = {
      displayMenu: false
    };
  }

  componentDidMount() {
    const {
      match: {
        params: { slug }
      },
      GetSingleArticle
    } = this.props;
    GetSingleArticle(slug);
    window.scrollTo(0, 0);
  }

  componentDidUpdate() {
    const { deleted } = this.props;
    if (deleted) {
      window.location.assign('/');
    }
  }

  closeMenu = () => {
    this.setState({ displayMenu: false }, () => {
      document.removeEventListener('click', this.closeMenu);
    });
  };

  displayMenu = () => {
    this.setState({ displayMenu: true }, () => {
      document.addEventListener('click', this.closeMenu);
    });
  };

  render() {
    const {
      article: {
        author = {},
        id,
        authorId,
        title,
        description,
        body,
        slug,
        likes,
        dislikes,
        createdAt,
        readTime,
        averageRatings,
        commentCount
      },
      currentUser: { user }
    } = this.props;
    const username = localStorage.getItem('username');
    const { userName, image } = author;
    const ownArticle = userName === user.username;
    const { displayMenu } = this.state;
    return (
      <div className="wrapper">
        <div className="heading">
          <div className="heading__left">
            <span>
              <div className="heading__follow">
                <FollowUnfollowComponent
                  authorId={authorId}
                  username={userName}
                  pathname={this.props.location.pathname}
                />
              </div>
            </span>
            <div className="heading__image">
              <img
                src={image || DefaultAvatar}
                className="heading__img"
                alt="user"
              />
            </div>
            <div className="heading__user">
              <span className="heading__name">{userName}</span>
              <br />
              <span className="heading__munite">
                {momemt(createdAt)
                  .startOf('hour')
                  .fromNow()}
              </span>
              {'  '}
              <span className="heading__munite">
                {readTime}
.
              </span>
              <span>
                <div className="heading__avarageRating">
                  <AverageRating avarageRatings={averageRatings} />
                </div>
              </span>
            </div>
          </div>
          <div className="heading__right">
            <div className="heading__right-item">
              <div className="menu">
                <span className="bookmark">
                  <img src={bookmark} className="heading__bookmark" alt="" />
                </span>
                <span>
                  {username === userName || !username ? (
                    <img
                      src={ellipsis}
                      className="heading__menu"
                      alt=" "
                      onClick={this.displayMenu}
                    />
                  ) : (
                    ''
                  )}
                </span>
                {displayMenu ? (
                  <ArticleMenuDropdown
                    slug={slug}
                    pathname={this.props.location.pathname}
                  />
                ) : (
                  ''
                )}
              </div>
            </div>
          </div>
        </div>
        <div className="body">
          <div className="body__title">
            <h2>{title}</h2>
          </div>
          <div className="body__description">
            <p className="body__description-content">{description}</p>
          </div>
          <div className="body__article-body">{ReactHtmlParser(body)}</div>
          <hr />
          <div className="status">
            <div className="status__stats">
              <span>7 reads</span>
            </div>
            <div className="status__comment">
              <BrowserRouter>
                <Link to="#?" className="status__comment">
                  <CommentCountComponent
                    className="btn__commentCount"
                    count={commentCount}
                  />
                </Link>
              </BrowserRouter>
            </div>
            <div className="status__like">
              <span>
                <LikeDislikeArticle
                  likes={likes}
                  dislikes={dislikes}
                  slug={this.props.match.params.slug}
                  pathname={this.props.location.pathname}
                />
              </span>
            </div>
            <div className="status__rate">
              {ownArticle ? (
                <span className="status__rate">
                  <DisabledStar />
                </span>
              ) : (
                <span className="status__rate">
                  <StarRating
                    articleId={id}
                    pathname={this.props.location.pathname}
                    slug={slug}
                  />
                </span>
              )}
            </div>
          </div>
          <div className="tags-share-container">
            <div>
              <button type="button">Tags Carlos Tech Andela</button>
            </div>
            <div className="share-buttons">
              <ShareArticle />
            </div>
          </div>
        </div>
      </div>
    );
  }
}
const mapStateToProps = ({ getSingleArticle, login }) => ({
  article: getSingleArticle.article,
  currentUser: login,
  isAuthenticated: login,
  deleted: getSingleArticle.deleted
});
const mapDispatchToProps = {
  GetSingleArticle,
  deleteArticle
};

ViewSingleArticle.defaultProps = {
  location: {
    pathname: ''
  },
  match: {
    params: ''
  }
};
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ViewSingleArticle);
