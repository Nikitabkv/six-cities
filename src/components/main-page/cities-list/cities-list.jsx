import React from 'react';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import City from './city/city.jsx';

const cities = [`Paris`, `Cologne`, `Brussels`, `Amsterdam`, `Hamburg`, `Dusseldorf`];

const CitiesList = (props) => {
  const {currentCity, onClickCity} = props;

  return (
    <ul className="locations__list tabs__list">
      {cities.map((item) => <City key={item} onClickCity={onClickCity} city={item} currentCity={currentCity}/>)}
    </ul>
  );
};

const mapStateToProps = (state) => {
  return {currentCity: state.city};
};

CitiesList.propTypes = {
  onClickCity: PropTypes.func,
  currentCity: PropTypes.string,
};

export default connect(mapStateToProps, null)(CitiesList);
