import React from 'react';
import PropTypes from 'prop-types';
import Offer from '../../offer/offer.jsx';

const OfferList = (props) => {
  const {hotelData, onHover} = props;

  return (
    <div className="cities__places-list places__list tabs__content">
      {hotelData.map((offerItem) => <Offer key={offerItem.id} data={offerItem} onHover={onHover}/>)}
    </div>
  );
};

OfferList.propTypes = {
  hotelData: PropTypes.array.isRequired,
  onHover: PropTypes.func,
};

export default OfferList;
