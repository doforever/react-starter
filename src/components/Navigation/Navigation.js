import React from 'react';
import styles from './Navigation.scss';
import PropTypes from 'prop-types';
import ReactHtmlParser from 'react-html-parser';

const Navigation = ({lists}) => (
  <nav className={styles.component}>
    {(lists.map(listData => (
      <a key={listData.id} className={styles.link}>{ReactHtmlParser(listData.title)}</a>
    )))}
    <a className={styles.link}>All</a>
  </nav>
);

Navigation.propTypes = {
  lists: PropTypes.array,
};

export default Navigation;
