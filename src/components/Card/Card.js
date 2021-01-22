import React from 'react';
import PropTypes from 'prop-types';
import styles from './Card.scss';

const Card = props => (
  <div className={styles.component}>
    <h4>{props.title}</h4>
  </div>
);

Card.propTypes = {
  title: PropTypes.node.isRequired,
};

export default Card;
