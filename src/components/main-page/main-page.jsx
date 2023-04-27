import React from 'react';
import {Link} from 'react-router-dom';
import PropTypes from 'prop-types';

import {APP_ROUTE} from '../../utils/const.js';
import CitiesCountainer from './cities-container/cities-countainer.jsx';
import CitiesList from './cities-list/cities-list.jsx';

const MainPage = ({hotelData}) => {

  return (
    <div className="page page--gray page--main">
      <header className="header">
        <div className="container">
          <div className="header__wrapper">
            <div className="header__left">
              <Link to={APP_ROUTE.ROOT} className="header__logo-link header__logo-link--active">
                <img
                  className="header__logo"
                  src="img/logo.svg"
                  alt="6 cities logo"
                  width={81}
                  height={41}
                />
              </Link>
            </div>
            <nav className="header__nav">
              <ul className="header__nav-list">
                <li className="header__nav-item user">
                  <a className="header__nav-link header__nav-link--profile" href="#">
                    <div className="header__avatar-wrapper user__avatar-wrapper"></div>
                    <span className="header__user-name user__name">
                  Oliver.conner@gmail.com
                    </span>
                  </a>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </header>
      <main className="page__main page__main--index">
        <h1 className="visually-hidden">Cities</h1>
        <div className="tabs">
          <section className="locations container">
            <CitiesList/>
          </section>
        </div>
        <div className="cities">
          <CitiesCountainer hotelData={hotelData} />
        </div>
      </main>
    </div>
  );
};

MainPage.propTypes = {
  hotelData: PropTypes.array.isRequired,
};

export default MainPage;
