import React from 'react';
import PropTypes from 'prop-types';

const RoomGoods = (props) => {
  const {goods} = props;
  return (
    <li className="property__inside-item">
      {goods}
    </li>
  );
};

RoomGoods.propTypes = {
  goods: PropTypes.string,
};

export default RoomGoods;
