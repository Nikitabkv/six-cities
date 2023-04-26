import {
  CHANGE_CITY,
  CHANGE_OFFERS,
  CHANGE_SORT
} from './action-types.js';

const initialState = {
  city: `Amsterdam`,
  offers: {},
  sort: `popular`,
};

const updateStore = (state = initialState, action) => {
  switch (action.type) {
    case CHANGE_CITY:
      return {
        ...state,
        city: action.payload,
      };
    case CHANGE_OFFERS:
      return {
        ...state,
        offers: action.payload,
      };
    case CHANGE_SORT:
      return {
        ...state,
        sort: action.payload,
      };
    default:
      return {
        ...initialState,
      };
  }
};

export default updateStore;
