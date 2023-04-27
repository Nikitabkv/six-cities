import React from 'react';
import {Link} from 'react-router-dom';
import PropTypes from 'prop-types';
import {APP_ROUTE} from '../../utils/const.js';

const Offer = ({data, onHover}) => {
  const {id, title, previewImage, isFavorite, isPremium, price, type, rating} = data;

  const handleMouseEnter = () => {
    onHover(data);
  };

  const handleMouseLeave = () => {
    onHover({});
  };

  return (
    <article className="cities__place-card place-card" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
      {isPremium ? <div className="place-card__mark"><span>Premium</span></div> : ``}
      <div className="cities__image-wrapper place-card__image-wrapper">
        <Link to={APP_ROUTE.OFFER + id}>
          <img
            className="place-card__image"
            src={previewImage}
            width={260}
            height={200}
            alt="Place image"
          />
        </Link>
      </div>
      <div className="place-card__info">
        <div className="place-card__price-wrapper">
          <div className="place-card__price">
            <b className="place-card__price-value">€{price}</b>
            <span className="place-card__price-text">/&nbsp;night</span>
          </div>
          <button className={`place - card__bookmark - button ${isFavorite ? `place-card__bookmark-button--active` : ``} button`} type="button">
            <svg className="place-card__bookmark-icon" width={18} height={19}>
              <use xlinkHref="#icon-bookmark" />
            </svg>
            <span className="visually-hidden">To bookmarks</span>
          </button>
        </div>
        <div className="place-card__rating rating">
          <div className="place-card__stars rating__stars">
            <span style={{width: `${rating * 20}%`}} />
            <span className="visually-hidden">Rating</span>
          </div>
        </div>
        <h2 className="place-card__name">
          <Link to={APP_ROUTE.OFFER + id}>
            {title}
          </Link>
        </h2>
        <p className="place-card__type">{type}</p>
      </div>
    </article>
  );
};

Offer.propTypes = {
  onHover: PropTypes.func,
  data: PropTypes.object,
  title: PropTypes.string,
  image: PropTypes.string,
  favorite: PropTypes.bool,
  premium: PropTypes.bool,
  price: PropTypes.number,
  rating: PropTypes.number
};

export default Offer;
