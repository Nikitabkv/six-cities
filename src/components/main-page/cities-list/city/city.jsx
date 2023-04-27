import React from 'react';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import {getHotelData} from '../../../../moks/offers.js';
import {changeCity, changeOffers} from '../../../../store/action.js';

const City = (props) => {
  const {city, currentCity, onClickCity} = props;

  return (
    <li className="locations__item">
      <a className={`locations__item-link tabs__item ${city === currentCity ? `tabs__item--active` : ``}`}>
        <span onClick={onClickCity}>{city}</span>
      </a>
    </li>
  );
};

City.propTypes = {
  onClickCity: PropTypes.func,
  currentCity: PropTypes.string,
  currentOffers: PropTypes.array,
  city: PropTypes.string,
};

const mapDispatchToProps = (dispatch) => ({
  onClickCity(evt) {
    dispatch(changeCity(evt.target.innerText));
    dispatch(changeOffers(getHotelData(evt.target.innerText)));
  },
});

export default connect(null, mapDispatchToProps)(City);
