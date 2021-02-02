import React from 'react';
import styles from './Navigation.scss';
import PropTypes from 'prop-types';
import MenuItem from '../MenuItem/MenuItem';

const Navigation = ({lists, changeChosenList, chosenListId}) => (
  <nav className={styles.component}>
    {(lists.map(listData => (
      <MenuItem
        key={listData.id}
        id={listData.id}
        text={listData.title}
        active={chosenListId === listData.id}
        action={changeChosenList}/>
    )))}
    <MenuItem id='' text='All' active={!chosenListId} action={changeChosenList}/>
  </nav>
);

Navigation.propTypes = {
  lists: PropTypes.array,
  changeChosenList: PropTypes.func,
  chosenListId: PropTypes.string,
};

export default Navigation;
