import React from 'react';
import PropTypes from 'prop-types';
import ReviewComment from './review-comment/review-comment.jsx';
import ReviewForm from './review-comment/review-form/review-form.jsx';

const RoomReviews = (props) => {
  const {commentData} = props;
  return (
    <section className="property__reviews reviews">
      <h2 className="reviews__title">Reviews &middot; <span className="reviews__amount">{commentData.length}</span></h2>
      <ul className="reviews__list">
        {commentData.map((item) => <ReviewComment key={item.id} {...item}/>)}
      </ul>
      <ReviewForm/>
    </section>
  );
};

RoomReviews.propTypes = {
  commentData: PropTypes.array,
};

export default RoomReviews;
