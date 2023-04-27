import React from 'react';
import PropTypes from 'prop-types';
import Offer from '../../offer/offer.jsx';

const OfferList = (props) => {
  const {currentOffers, onHover} = props;

  return (
    <div className="cities__places-list places__list tabs__content">
      {currentOffers.map((offerItem) => <Offer key={offerItem.id} data={offerItem} onHover={onHover}/>)}
    </div>
  );
};

OfferList.propTypes = {
  currentOffers: PropTypes.array,
  onHover: PropTypes.func,
};

export default OfferList;
