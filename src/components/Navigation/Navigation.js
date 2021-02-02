import React from 'react';
import styles from './Navigation.scss';
import PropTypes from 'prop-types';
import MenuItem from '../MenuItem/MenuItem';

const Navigation = ({lists, changeChosenList, chosenListId, clearChosenList}) => (
  <nav className={styles.component}>
    {(lists.map(listData => (
      <MenuItem
        key={listData.id}
        id={listData.id}
        text={listData.title}
        active={chosenListId === listData.id}
        action={changeChosenList}/>
    )))}
    <MenuItem text='All' active={!chosenListId} action={clearChosenList}/>
  </nav>
);

Navigation.propTypes = {
  lists: PropTypes.array,
  changeChosenList: PropTypes.func,
  chosenListId: PropTypes.string,
  clearChosenList: PropTypes.func,
};

export default Navigation;
