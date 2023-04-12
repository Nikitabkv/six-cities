import React from 'react';
import ReactDOM from 'react-dom';

import App from './components/app/app';

import {hotelData} from './moks/offers.js';

const offersCount = 275;

ReactDOM.render(
    <App hotelData={hotelData} offersCount={offersCount} />,
    document.querySelector(`#root`)
);
