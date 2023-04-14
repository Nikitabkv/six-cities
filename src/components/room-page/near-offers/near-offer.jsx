import React from 'react';
import Offer from '../../offer/offer.jsx';

const NearOffer = (data) => {
  const {hotelData} = data;

  return (
    <div className="container">
      <section className="near-places places">
        <h2 className="near-places__title">Other places in the neighbourhood</h2>
        <div className="near-places__list places__list">
          {hotelData.slice(0, 3).map((offer) => <Offer key={offer.id} data={offer} onHover={()=>{}}/>)}
        </div>
      </section>
    </div>
  );
};

export default NearOffer;
