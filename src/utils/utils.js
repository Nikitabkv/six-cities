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

export {getCityData};
