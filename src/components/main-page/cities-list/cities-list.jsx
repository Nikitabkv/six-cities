import React from 'react';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import {changeCity} from '../../../store/action.js';

const CitiesList = (props) => {
  const {onClickCity} = props;

  return (
    <ul className="locations__list tabs__list">
      <li className="locations__item">
        <a className="locations__item-link tabs__item tabs__item--active" href="#">
          <span onClick={onClickCity}>Paris</span>
        </a>
      </li>
      <li className="locations__item">
        <a className="locations__item-link tabs__item" href="#">
          <span onClick={onClickCity}>Cologne</span>
        </a>
      </li>
      <li className="locations__item">
        <a className="locations__item-link tabs__item" href="#">
          <span onClick={onClickCity}>Brussels</span>
        </a>
      </li>
      <li className="locations__item">
        <a className="locations__item-link tabs__item" href="#">
          <span onClick={onClickCity}>Amsterdam</span>
        </a>
      </li>
      <li className="locations__item">
        <a className="locations__item-link tabs__item" href="#">
          <span onClick={onClickCity}>Hamburg</span>
        </a>
      </li>
      <li className="locations__item">
        <a className="locations__item-link tabs__item" href="#">
          <span onClick={onClickCity}>Dusseldorf</span>
        </a>
      </li>
    </ul>
  );
};

const mapStateToProps = (state) => {
  return {city: state.city};
};

const mapDispatchToProps = (dispatch) => ({
  onClickCity(evt) {
    dispatch(changeCity(evt.target.innerText));
  },
});

CitiesList.propTypes = {
  onClickCity: PropTypes.func,
};

export default connect(mapStateToProps, mapDispatchToProps)(CitiesList);
