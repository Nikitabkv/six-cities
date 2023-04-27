import React, {useState} from 'react';
import OfferList from '../offer-list/offer-list.jsx';
import Map from '../../map/map.jsx';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';

const CitiesCountainer = (props) => {
  const {currentCity, currentOffers} = props;
  const [activeHotel, setData] = useState({});

  return (
    <div className="cities__places-container container">
      <section className="cities__places places">
        <h2 className="visually-hidden">Places</h2>
        <b className="places__found">{currentOffers.length} places to stay in {currentCity}</b>
        <form className="places__sorting" action="#" method="get">
          <span className="places__sorting-caption">Sort by</span>
          <span className="places__sorting-type" tabIndex={0}>
                    Popular
            <svg className="places__sorting-arrow" width={7} height={4}>
              <use xlinkHref="#icon-arrow-select"/>
            </svg>
          </span>
          <ul className="places__options places__options--custom places__options--opened">
            {/* <li className="places__option places__option--active" tabIndex={0}> */}
            {/*   Popular */}
            {/* </li> */}
            {/* <li className="places__option" tabIndex={0}> */}
            {/*   Price: low to high */}
            {/* </li> */}
            {/* <li className="places__option" tabIndex={0}> */}
            {/*   Price: high to low */}
            {/* </li> */}
            {/* <li className="places__option" tabIndex={0}> */}
            {/*   Top-rated first */}
            {/* </li> */}
          </ul>
        </form>
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
