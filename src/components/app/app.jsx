import React from 'react';
import PropTypes from 'prop-types';
import {BrowserRouter, Switch, Route} from 'react-router-dom';

import MainPage from '../main-page/main-page';
import RoomPage from '../room-page/room-page.jsx';
import FavoritesPage from '../favorites-page/favorites-page.jsx';
import LoginPage from '../login-page/login-page.jsx';
import Page404 from '../404-page/404-page.jsx';

import appRoute from '../../utils/const.js';

const App = (props) => {
  const {hotelData, offersCount} = props;
  return (
    <BrowserRouter>
      <Switch>
        <Route path={appRoute.ROOT} exact>
          <MainPage hotelData={hotelData} offersCount={offersCount}/>
        </Route>
        <Route path={appRoute.OFFER + `:id?`} exact>
          <RoomPage hotelData={hotelData} />
        </Route>
        <Route path={appRoute.FAVORITES} exact>
          <FavoritesPage hotelData={hotelData}/>
        </Route>
        <Route path={appRoute.LOGIN} exact>
          <LoginPage />
        </Route>
        <Route>
          <Page404 />
        </Route>
      </Switch>
    </BrowserRouter>
  );
};

App.propTypes = {
  offersCount: PropTypes.number.isRequired,
  hotelData: PropTypes.array.isRequired,
};

export default App;
