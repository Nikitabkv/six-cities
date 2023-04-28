import React, {useState} from 'react';
import {connect} from 'react-redux';
import {changeOffers, changeSort} from '../../../../store/action.js';
import PropTypes from 'prop-types';

const Sort = (props) => {
  const {sort, onClickSort} = props;
  const [open, setOpen] = useState(false);

  const onClickOpenClose = () => {
    setOpen(!open);
  };

  return (
    <form className="places__sorting" action="#" method="get" onClick={onClickOpenClose}>
      <span className="places__sorting-caption">Sort by&ensp;</span>
      <span className="places__sorting-type" tabIndex={0}>
        {sort}
        <svg className="places__sorting-arrow" width={7} height={4}>
          <use xlinkHref="#icon-arrow-select"/>
        </svg>
      </span>
      <ul className={`places__options places__options--custom ${open ? `places__options--opened` : ``}`}>
        <li className={`places__option ${sort === `Popular` ? `places__option--active` : ``}`} tabIndex={0} id={`Popular`} onClick={onClickSort}>
        Popular
        </li>
        <li className={`places__option ${sort === `LowToHigh` ? `places__option--active` : ``}`} tabIndex={0} id={`LowToHigh`} onClick={onClickSort}>
        Price: low to high
        </li>
        <li className={`places__option ${sort === `HighToLow` ? `places__option--active` : ``}`} tabIndex={0} id={`HighToLow`} onClick={onClickSort}>
        Price: high to low
        </li>
        <li className={`places__option ${sort === `Rating` ? `places__option--active` : ``}`} tabIndex={0} id={`Rating`} onClick={onClickSort}>
        Top-rated first
        </li>
      </ul>
    </form>
  );
};

const mapStateToProps = (state) => (
  {sort: state.sort}
);

const mapDispatchToProps = (dispatch) => ({
  onClickSort(evt) {
    dispatch(changeSort(evt.target.id));
    dispatch(changeOffers());
  },
});

Sort.propTypes = {
  onClickSort: PropTypes.func,
  sort: PropTypes.string,
};

export default connect(mapStateToProps, mapDispatchToProps)(Sort);

// places__options--opened
// - стиль открытого выбора
