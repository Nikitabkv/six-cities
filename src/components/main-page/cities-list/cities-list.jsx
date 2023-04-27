import React from 'react';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import City from './city/city.jsx';
import {CITIES} from '../../../utils/const.js';

const CitiesList = (props) => {
  const {currentCity, onClickCity} = props;

  return (
    <ul className="locations__list tabs__list">
      {CITIES.map((item) => <City key={item.name} onClickCity={onClickCity} city={item.name} currentCity={currentCity}/>)}
    </ul>
  );
};

const mapStateToProps = (state) => {
  return {currentCity: state.city};
};

CitiesList.propTypes = {
  onClickCity: PropTypes.func,
  currentCity: PropTypes.object,
};

export default connect(mapStateToProps, null)(CitiesList);
