import {
  CHANGE_CITY,
  CHANGE_OFFERS,
  CHANGE_SORT
} from './action-types.js';
import {getHotelData} from '../moks/offers.js';
import {getCityData} from '../utils/utils.js';

const initialState = {
  city: {
    "name": `Paris`,
    "location": {
      "latitude": 48.856663,
      "longitude": 2.351556,
    }
  },
  offers: getHotelData({
    "name": `Paris`,
    "location": {
      "latitude": 48.856663,
      "longitude": 2.351556,
    }
  }, `Popular`),
  sort: `HighToLow`,
};

const updateStore = (state = initialState, action) => {
  switch (action.type) {
    case CHANGE_CITY:
      return {
        ...state,
        city: getCityData(action.payload),
      };
    case CHANGE_OFFERS:
      return {
        ...state,
        offers: getHotelData(state.city, state.sort),
      };
    case CHANGE_SORT:
      return {
        ...state,
        sort: action.payload,
      };
    default:
      return {
        ...state,
      };
  }
};

export default updateStore;
