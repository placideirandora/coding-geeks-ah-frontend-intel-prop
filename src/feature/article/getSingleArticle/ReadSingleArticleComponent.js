/* eslint-disable import/no-named-as-default */
/* eslint-disable react/destructuring-assignment */
import React, { Component } from 'react';
import StarRating from '../starRating/StarRatingComponent';
import AverageRating from '../averageRating/AverageRatingComponent';

class SingleArticle extends Component {
  constructor() {
    super();

    this.state = {
      avarageRatings: 3.5,
      articleId: 1,
    };
  }

  render() {
    return (
      <div>
        <div>
          <AverageRating avarageRatings={this.state.avarageRatings} />
        </div>
        <div>
          <StarRating
            articleId={this.state.articleId}
            pathname={this.props.location.pathname}
          />
        </div>
      </div>
    );
  }
}

SingleArticle.defaultProps = {
  location: {
    pathname: ''
  }
};


export default SingleArticle;
