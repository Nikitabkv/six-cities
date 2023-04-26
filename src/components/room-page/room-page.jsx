import React, {useEffect} from 'react';
import {Link, Redirect, useParams} from 'react-router-dom';
import AppRoute from '../../utils/const.js';
import PropTypes from 'prop-types';

import RoomInfo from './room-info/room-info.jsx';
import Map from '../map/map.jsx';
import NearOffer from './near-offers/near-offer.jsx';

const RoomImage = (props) => {
  const {image} = props;
  return (
    <div className="property__image-wrapper">
      <img className="property__image" src={image} alt="Photo studio"/>
    </div>
  );
};

const RoomPage = (props) => {
  const {id} = useParams();
  const {hotelData} = props;

  if (id > hotelData.length) {
    return (<Redirect to={AppRoute.ROOT}/>);
  }

  const currentHotelData = hotelData[id - 1];
  const {images} = currentHotelData;

  useEffect(() => {
    window.scrollTo({top: 0, behavior: `smooth`});
  }, [currentHotelData]);

  return (
    <div className="page">
      <header className="header">
        <div className="container">
          <div className="header__wrapper">
            <div className="header__left">
              <Link to={AppRoute.ROOT} className="header__logo-link header__logo-link--active">
                <img className="header__logo" src="img/logo.svg" alt="6 cities logo" width="81" height="41"/>
              </Link>
            </div>
            <nav className="header__nav">
              <ul className="header__nav-list">
                <li className="header__nav-item user">
                  <a className="header__nav-link header__nav-link--profile" href="#">
                    <div className="header__avatar-wrapper user__avatar-wrapper">
                    </div>
                    <span className="header__user-name user__name">Oliver.conner@gmail.com</span>
                  </a>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </header>

      <main className="page__main page__main--property">
        <section className="property">
          <div className="property__gallery-container container">
            <div className="property__gallery">
              {/* eslint-disable-next-line react/prop-types */}
              {images.map((item) => <RoomImage key={Math.random()} image={item} />)}
            </div>
          </div>
          <div className="property__container container">
            {/* Информация о комнате */}
            <RoomInfo hotelData={currentHotelData}/>
            {/* Информация о комнате */}
          </div>
          <section className="property__map map">
            {/* Карта */}
            <Map hotelData={hotelData.slice(0, 3)} activeHotel={currentHotelData}/>
            {/* Карта */}
          </section>
        </section>
        <NearOffer hotelData={hotelData}/>
      </main>
    </div>
  );
};

RoomPage.propTypes = {
  id: PropTypes.number,
  hotelData: PropTypes.array,
};

RoomImage.propTypes = {
  image: PropTypes.string,
};

export default RoomPage;
