import React from 'react';
import PropTypes from 'prop-types';
import styles from './Card.scss';
import ReactHtmlParser from 'react-html-parser';

const Card = ({title, columnTitle, listTitle}) => (
  <div className={styles.component}>
    <h4>{title}</h4>
    {columnTitle && <h5>{columnTitle}</h5>}
    {listTitle && <h5>{ReactHtmlParser(listTitle)}</h5>}
  </div>
);

Card.propTypes = {
  title: PropTypes.node.isRequired,
  columnTitle: PropTypes.string,
  listTitle: PropTypes.string,
};

export default Card;
