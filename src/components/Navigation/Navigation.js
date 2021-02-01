import React from 'react';
import styles from './Navigation.scss';
import PropTypes from 'prop-types';
import ReactHtmlParser from 'react-html-parser';

const Navigation = ({lists, changeChosenList, chosenListId}) => (
  <nav className={styles.component}>
    {(lists.map(listData => (
      <a key={listData.id} className={styles.link + (listData.id == chosenListId ? ` ${styles.active}` : '')} onClick={() => changeChosenList(listData.id)}>{ReactHtmlParser(listData.title)}</a>
    )))}
    <a className={styles.link + (!chosenListId ? ` ${styles.active}` : '')} onClick={() => changeChosenList('')}>All</a>
  </nav>
);

Navigation.propTypes = {
  lists: PropTypes.array,
  changeChosenList: PropTypes.func,
  chosenListId: PropTypes.string,
};

export default Navigation;
