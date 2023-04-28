import React from 'react';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import {changeCity, changeOffers} from '../../../../store/action.js';

const City = (props) => {
  const {city, currentCity, onClickCity} = props;

  return (
    <li className="locations__item" onClick={onClickCity}>
      <a className={`locations__item-link tabs__item ${city === currentCity.name ? `tabs__item--active` : ``}`}>
        <span>{city}</span>
      </a>
    </li>
  );
};

City.propTypes = {
  onClickCity: PropTypes.func,
  currentCity: PropTypes.object,
  currentOffers: PropTypes.array,
  city: PropTypes.string,
};

const mapDispatchToProps = (dispatch) => ({
  onClickCity(evt) {
    dispatch(changeCity(evt.target.innerText));
    dispatch(changeOffers());
  },
});

export default connect(null, mapDispatchToProps)(City);
