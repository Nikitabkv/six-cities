import React, {useState} from 'react';
import PropTypes from 'prop-types';
import Offer from '../../offer/offer.jsx';

const OfferList = (props) => {
  const {hotelData} = props;
  const [, setData] = useState(null);

  return (
    <div className="cities__places-list places__list tabs__content">
      {hotelData.map((offerItem) => <Offer key={offerItem.id} data={offerItem} onHover={setData}/>)}
    </div>
  );
};

OfferList.propTypes = {
  hotelData: PropTypes.array.isRequired,
};

export default OfferList;
