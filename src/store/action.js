import {
  CHANGE_CITY,
  CHANGE_OFFERS,
  CHANGE_SORT
} from './action-types.js';

const changeCity = (value) => (
  {type: CHANGE_CITY, payload: value}
);

const changeOffers = () => (
  {type: CHANGE_OFFERS}
);

const changeSort = (value) => (
  {type: CHANGE_SORT, payload: value}
);

export {changeCity, changeOffers, changeSort};
