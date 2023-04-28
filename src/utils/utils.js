import {CITIES} from './const.js';

const getCityData = (city) => {
  let cityData = {
    "name": `Paris`,
    "location": {
      "latitude": 48.856663,
      "longitude": 2.351556,
    }
  };

  CITIES.forEach((item) => {
    if (item.name === city) {
      cityData = item;
    }
  });

  return cityData;
};

const sortByPriceHigh = (a, b) => {
  return b.price - a.price;
};

const sortByPriceLow = (a, b) => {
  return a.price - b.price;
};

const sortByRating = (a, b) => {
  return b.rating - a.rating;
};

export {getCityData, sortByPriceHigh, sortByRating, sortByPriceLow};
