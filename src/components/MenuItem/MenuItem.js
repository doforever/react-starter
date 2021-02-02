import React from 'react';
import styles from './MenuItem.scss';
import PropTypes from 'prop-types';
import ReactHtmlParser from 'react-html-parser';

const MenuItem = ({id, text, action, active}) => (
  <a
    key={id}
    className={styles.component + (active ? ` ${styles.active}` : '')}
    onClick={() => action(id)}>
    {ReactHtmlParser(text)}
  </a>
);

MenuItem.propTypes = {
  id: PropTypes.string,
  text: PropTypes.node,
  action: PropTypes.func,
  active: PropTypes.bool,
};

export default MenuItem;
