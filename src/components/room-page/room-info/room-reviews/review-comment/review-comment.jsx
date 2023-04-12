import React from 'react';
import PropTypes from 'prop-types';

const ReviewComment = (props) => {
  const {comment, date, rating, user} = props;
  const {avatarUrl, isPro, name} = user;
  return (
    <li className="reviews__item">
      <div className="reviews__user user">
        <div className={`reviews__avatar-wrappe ${isPro ? `property__avatar-wrapper--pro` : ``} user__avatar-wrapper`}>
          <img className="reviews__avatar user__avatar" src={avatarUrl} width="54" height="54"
            alt="Reviews avatar"/>
        </div>
        <span className="reviews__user-name">
          {name}
        </span>
      </div>
      <div className="reviews__info">
        <div className="reviews__rating rating">
          <div className="reviews__stars rating__stars">
            <span style={{width: `${rating * 20}%`}}></span>
            <span className="visually-hidden">Rating</span>
          </div>
        </div>
        <p className="reviews__text">
          {comment}
        </p>
        <time className="reviews__time" dateTime={date}>April 2019</time>
      </div>
    </li>
  );
};

ReviewComment.propTypes = {
  comment: PropTypes.string,
  date: PropTypes.string,
  rating: PropTypes.number,
  user: PropTypes.object,
};

export default ReviewComment
