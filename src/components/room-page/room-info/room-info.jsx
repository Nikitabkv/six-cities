import React from 'react';
import RoomGoods from './room-goods/room-goods.jsx';
import PropTypes from 'prop-types';
import RoomReviews from './room-reviews/room-reviews.jsx';
import {commentData} from '../../../moks/offers.js';

const RoomInfo = (props) => {
  const {hotelData} = props;
  const {bedrooms, maxAdults, price, type, goods, host, description, rating, title, isPremium} = hotelData;
  return (
    <div className="property__wrapper">
      {/* Проверка премиумности */}
      {isPremium ? <div className="property__mark"> <span>Premium</span> </div> : ``}
      {/* Проверка премиумности */}
      <div className="property__name-wrapper">
        <h1 className="property__name">
          {/* Заголовок */}
          {title}
          {/* Заголовок */}
        </h1>
        <button className="property__bookmark-button button" type="button">
          <svg className="property__bookmark-icon" width="31" height="33">
            <use xlinkHref="#icon-bookmark"></use>
          </svg>
          <span className="visually-hidden">To bookmarks</span>
        </button>
      </div>
      <div className="property__rating rating">
        <div className="property__stars rating__stars">
          {/* Рейтинг */}
          <span style={{width: `${rating * 20}%`}}></span>
          {/* Рейтинг */}
          <span className="visually-hidden">Rating</span>
        </div>
        <span className="property__rating-value rating__value">{rating}</span>
      </div>
      <ul className="property__features">
        <li className="property__feature property__feature--entire">
          {type}
        </li>
        <li className="property__feature property__feature--bedrooms">
          {bedrooms} Bedrooms
        </li>
        <li className="property__feature property__feature--adults">
          Max {maxAdults} adults
        </li>
      </ul>
      <div className="property__price">
        <b className="property__price-value">&euro;{price}</b>
        <span className="property__price-text">&nbsp;night</span>
      </div>
      <div className="property__inside">
        <h2 className="property__inside-title">What&apos;s inside</h2>
        <ul className="property__inside-list">
          {/* Что есть в отеле */}
          {goods.map((item) => <RoomGoods key={item} goods={item}/>)}
          {/* Что есть в отеле */}
        </ul>
      </div>
      <div className="property__host">
        <h2 className="property__host-title">Meet the host</h2>
        <div className="property__host-user user">
          <div className={`property__avatar-wrapper ${host.isPro ? `property__avatar-wrapper--pro` : ``} user__avatar-wrapper`}>
            <img className="property__avatar user__avatar" src={host.avatarUrl} width="74" height="74"
              alt="Host avatar"/>
          </div>
          <span className="property__user-name">
            {host.name}
          </span>
          {host.isPro ? <span className="property__user-status"> Pro </span> : ``}
        </div>
        <div className="property__description">
          <p className="property__text">
            {description}
          </p>
          <p className="property__text">
            An independent House, strategically located between Rembrand Square and National Opera, but where the
            bustle of the city comes to rest in this alley flowery and colorful.
          </p>
        </div>
      </div>
      <RoomReviews commentData={commentData}/>
    </div>
  );
};

RoomInfo.propTypes = {
  hotelData: PropTypes.object,
};

export default RoomInfo;
