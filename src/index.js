import React from 'react';
import ReactDOM from 'react-dom';
import {createStore} from 'redux';
import {Provider} from 'react-redux';
import {composeWithDevTools} from 'redux-devtools-extension';

import reducer from './store/reducer.js';
import App from './components/app/app';

import {hotelData} from './moks/offers.js';

const store = createStore(
    reducer,
    composeWithDevTools()
);

ReactDOM.render(
    <Provider store={store}>
      <App
        hotelData={hotelData}
      />
    </Provider>,
    document.querySelector(`#root`)
);
