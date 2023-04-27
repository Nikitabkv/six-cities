import React from 'react';
import PropTypes from 'prop-types';
import Offer from '../../offer/offer.jsx';
import {connect} from 'react-redux';

const OfferList = (props) => {
  const {currentOffers, onHover} = props;

  return (
    <div className="cities__places-list places__list tabs__content">
      {currentOffers.map((offerItem) => <Offer key={offerItem.id} data={offerItem} onHover={onHover}/>)}
    </div>
  );
};

const mapStateToProps = (state) => {
  return {currentOffers: state.offers};
};

OfferList.propTypes = {
  hotelData: PropTypes.array.isRequired,
  currentOffers: PropTypes.array,
  onHover: PropTypes.func,
};

export default connect(mapStateToProps, null)(OfferList);
