import React, {useState} from 'react';
import OfferList from '../offer-list/offer-list.jsx';
import Map from '../../map/map.jsx';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import Sort from './sort-component/sort-component.jsx';

const CitiesCountainer = (props) => {
  const {currentCity, currentOffers} = props;
  const [activeHotel, setData] = useState({});

  return (
    <div className="cities__places-container container">
      <section className="cities__places places">
        <h2 className="visually-hidden">Places</h2>
        <b className="places__found">{currentOffers.length} places to stay in {currentCity}</b>
        <Sort/>
        <OfferList currentOffers={currentOffers} onHover={setData}/>
      </section>
      <div className="cities__right-section">
        <section className="cities__map map">
          <Map hotelData={currentOffers} activeHotel={activeHotel}/>
        </section>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    currentOffers: state.offers,
    currentCity: state.city.name,
  };
};

CitiesCountainer.propTypes = {
  currentOffers: PropTypes.array,
  hotelData: PropTypes.array,
  currentCity: PropTypes.string,
};

export default connect(mapStateToProps, null)(CitiesCountainer);
