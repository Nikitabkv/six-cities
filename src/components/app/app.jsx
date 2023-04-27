import React from 'react';
import PropTypes from 'prop-types';
import {BrowserRouter, Switch, Route} from 'react-router-dom';

import MainPage from '../main-page/main-page';
import RoomPage from '../room-page/room-page.jsx';
import FavoritesPage from '../favorites-page/favorites-page.jsx';
import LoginPage from '../login-page/login-page.jsx';
import Page404 from '../404-page/404-page.jsx';

import {APP_ROUTE} from '../../utils/const.js';

const App = (props) => {
  const {hotelData} = props;
  return (
    <BrowserRouter>
      <Switch>
        <Route path={APP_ROUTE.ROOT} exact>
          <MainPage hotelData={hotelData}/>
        </Route>
        <Route path={APP_ROUTE.OFFER + `:id?`} exact>
          <RoomPage hotelData={hotelData} />
        </Route>
        <Route path={APP_ROUTE.FAVORITES} exact>
          <FavoritesPage hotelData={hotelData}/>
        </Route>
        <Route path={APP_ROUTE.LOGIN} exact>
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
  hotelData: PropTypes.array.isRequired,
};

export default App;
